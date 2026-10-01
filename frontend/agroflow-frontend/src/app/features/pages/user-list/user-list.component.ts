import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { debounceTime, distinctUntilChanged, finalize, startWith } from 'rxjs';

import { DepartmentPreviewStore } from '../../departments/models/services/department-preview.store';
import { DepartmentService } from '../../departments/models/services/department.service';
import { Department } from '../../departments/models/department.model';
import { UserPreviewStore } from '../../users/models/services/user-preview.store';
import { UserService } from '../../users/models/services/user.service';
import { USER_ROLES, UserRecord, UserRole, UserWrite } from '../../users/models/user.model';
import { UserDialogComponent, UserDialogData, UserDialogMode } from './user-dialog.component';

type StatusFilter = 'all' | 'active' | 'inactive';
type DepartmentFilter = 'all' | number;
type RoleFilter = 'all' | UserRole;

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit, AfterViewInit {
  private readonly userService = inject(UserService);
  private readonly userPreviewStore = inject(UserPreviewStore);
  private readonly departmentService = inject(DepartmentService);
  private readonly departmentPreviewStore = inject(DepartmentPreviewStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) {
    if (paginator) this.dataSource.paginator = paginator;
  }

  readonly dataSource = new MatTableDataSource<UserRecord>([]);
  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly roles: readonly UserRole[] = USER_ROLES;
  readonly displayedColumns = ['id', 'fullName', 'email', 'department', 'role', 'status', 'actions'];
  readonly pageSizeOptions = [5, 10, 20];

  departments: Department[] = this.departmentPreviewStore.getAll();
  departmentFilter: DepartmentFilter = 'all';
  roleFilter: RoleFilter = 'all';
  statusFilter: StatusFilter = 'all';
  loading = true;
  saving = false;
  previewMode = false;
  departmentOptionsArePreview = true;
  errorMessage = '';

  constructor() {
    this.dataSource.filterPredicate = (user, filter) => {
      const [search, departmentId, role, status] = filter.split('\u0000');
      const matchesSearch = `${user.fullName} ${user.email}`.toLocaleLowerCase().includes(search);
      const matchesDepartment = departmentId === 'all' || user.departmentId === Number(departmentId);
      const matchesRole = role === 'all' || user.role === role;
      const matchesStatus = status === 'all' || (status === 'active' ? user.active : !user.active);
      return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
    };
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(startWith(this.searchControl.value), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFilters());
    this.loadDepartments();
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator?.firstPage();
  }

  onDepartmentFilterChange(event: MatSelectChange): void {
    this.departmentFilter = event.value as DepartmentFilter;
    this.applyFilters();
  }

  onRoleFilterChange(event: MatSelectChange): void {
    this.roleFilter = event.value as RoleFilter;
    this.applyFilters();
  }

  onStatusFilterChange(event: MatSelectChange): void {
    this.statusFilter = event.value as StatusFilter;
    this.applyFilters();
  }

  retryUsers(): void {
    this.loadUsers();
  }

  openUserDialog(mode: UserDialogMode, user?: UserRecord): void {
    const data: UserDialogData = { mode, user, departments: this.departments };
    this.dialog.open<UserDialogComponent, UserDialogData, UserWrite>(UserDialogComponent, {
      width: 'min(540px, calc(100vw - 32px))',
      maxWidth: 'calc(100vw - 32px)',
      data,
      autoFocus: 'first-tabbable'
    }).afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((payload) => {
        if (payload) this.saveUser(mode, user, payload);
      });
  }

  toggleUserStatus(user: UserRecord): void {
    const payload: UserWrite = {
      fullName: user.fullName,
      email: user.email,
      departmentId: user.departmentId,
      role: user.role,
      active: !user.active
    };
    this.saveUser('edit', user, payload, true);
  }

  private loadDepartments(): void {
    this.departmentService.getDepartments()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (departments) => {
          this.departments = departments;
          this.departmentOptionsArePreview = false;
          this.dataSource.data = this.dataSource.data.map((user) => this.withDepartmentName(user));
        },
        error: () => {
          this.departments = this.departmentPreviewStore.getAll();
          this.departmentOptionsArePreview = true;
          this.dataSource.data = this.dataSource.data.map((user) => this.withDepartmentName(user));
        }
      });
  }

  private loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';
    this.userService.getUsers()
      .pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (users) => {
          this.previewMode = false;
          this.dataSource.data = users.map((user) => this.withDepartmentName(user));
        },
        error: () => {
          this.previewMode = true;
          this.dataSource.data = this.userPreviewStore.getAll();
          this.errorMessage = 'The Users API is unavailable. Showing temporary preview data; changes will not be sent to the server.';
        }
      });
  }

  private applyFilters(): void {
    this.dataSource.filter = [
      this.searchControl.value.trim().toLocaleLowerCase(),
      this.departmentFilter,
      this.roleFilter,
      this.statusFilter
    ].join('\u0000');
    this.dataSource.paginator?.firstPage();
  }

  private saveUser(mode: UserDialogMode, user: UserRecord | undefined, payload: UserWrite, statusChange = false): void {
    if (this.saving) return;
    if (this.previewMode) {
      const departmentName = this.departments.find((department) => department.id === payload.departmentId)?.name ?? 'Department unavailable';
      const saved = mode === 'create'
        ? this.userPreviewStore.create(payload, departmentName)
        : user ? this.userPreviewStore.update(user.id, payload, departmentName) : undefined;
      if (saved) this.upsertUser(saved);
      this.showMessage(statusChange ? `User ${payload.active ? 'activated' : 'deactivated'} in preview data.` : mode === 'create' ? 'User added to preview data.' : 'User updated in preview data.');
      return;
    }

    this.saving = true;
    const request = mode === 'create'
      ? this.userService.createUser(payload)
      : user ? this.userService.updateUser(user.id, payload) : undefined;
    if (!request) {
      this.saving = false;
      this.showMessage('Unable to save this user.');
      return;
    }

    request.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (savedUser) => {
        this.upsertUser(this.withDepartmentName(savedUser));
        this.showMessage(statusChange ? `User ${payload.active ? 'activated' : 'deactivated'}.` : mode === 'create' ? 'User added.' : 'User updated.');
      },
      error: () => this.showMessage('The user could not be saved. Please try again.')
    });
  }

  private upsertUser(user: UserRecord): void {
    const users = [...this.dataSource.data];
    const existingIndex = users.findIndex((item) => item.id === user.id);
    if (existingIndex === -1) users.unshift(user);
    else users[existingIndex] = user;
    this.dataSource.data = users;
    this.applyFilters();
  }

  private withDepartmentName(user: UserRecord): UserRecord {
    return {
      ...user,
      departmentName: user.departmentName ?? this.departments.find((department) => department.id === user.departmentId)?.name
    };
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 3500 });
  }
}