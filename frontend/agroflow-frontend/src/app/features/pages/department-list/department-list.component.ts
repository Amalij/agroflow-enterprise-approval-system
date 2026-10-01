import { DatePipe } from '@angular/common';
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
import { finalize, startWith, debounceTime, distinctUntilChanged } from 'rxjs';

import { DepartmentService } from '../../departments/models/services/department.service';
import { DepartmentPreviewStore } from '../../departments/models/services/department-preview.store';
import { Department, DepartmentWrite } from '../../departments/models/department.model';
import {
  DepartmentDialogComponent,
  DepartmentDialogData,
  DepartmentDialogResult,
  DepartmentDialogMode
} from './department-dialog.component';

type DepartmentStatusFilter = 'all' | 'active' | 'inactive';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [
    DatePipe,
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
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.scss'
})
export class DepartmentListComponent implements OnInit, AfterViewInit {
  private readonly departmentService = inject(DepartmentService);
  private readonly previewStore = inject(DepartmentPreviewStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) {
    if (paginator) this.dataSource.paginator = paginator;
  }

  readonly dataSource = new MatTableDataSource<Department>([]);
  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly displayedColumns = ['id', 'name', 'description', 'status', 'createdAt', 'actions'];
  readonly pageSizeOptions = [5, 10, 20];

  statusFilter: DepartmentStatusFilter = 'all';
  loading = true;
  saving = false;
  previewMode = false;
  errorMessage = '';

  constructor() {
    this.dataSource.filterPredicate = (department, filter) => {
      const [search, status] = filter.split('\u0000');
      const searchText = [department.id, department.code, department.name, department.description]
        .filter((value) => value !== undefined)
        .join(' ')
        .toLocaleLowerCase();
      const matchesSearch = searchText.includes(search);
      const matchesStatus = status === 'all' || (status === 'active' ? department.active : !department.active);
      return matchesSearch && matchesStatus;
    };
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(startWith(this.searchControl.value), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFilters());
    this.loadDepartments();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator?.firstPage();
  }

  onStatusFilterChange(event: MatSelectChange): void {
    this.statusFilter = event.value as DepartmentStatusFilter;
    this.applyFilters();
  }

  retryDepartments(): void {
    this.loadDepartments();
  }

  openDialog(mode: DepartmentDialogMode, department?: Department): void {
    const data: DepartmentDialogData = { mode, department };
    this.dialog.open<DepartmentDialogComponent, DepartmentDialogData, DepartmentDialogResult>(DepartmentDialogComponent, {
      width: 'min(520px, calc(100vw - 32px))',
      maxWidth: 'calc(100vw - 32px)',
      data,
      autoFocus: mode === 'delete' ? false : 'first-tabbable'
    }).afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (!result) return;
        if (result.action === 'delete' && department) this.deleteDepartment(department);
        if (result.action === 'save') this.saveDepartment(mode, department, result.department);
      });
  }

  private loadDepartments(): void {
    this.loading = true;
    this.errorMessage = '';
    this.departmentService
      .getDepartments()
      .pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.previewMode = false;
          this.dataSource.data = data;
        },
        error: () => {
          this.previewMode = true;
          this.dataSource.data = this.previewStore.getAll();
          this.errorMessage = 'The Departments API is unavailable. Showing temporary preview data; changes will stay in this browser session.';
        }
      });
  }

  private applyFilters(): void {
    this.dataSource.filter = `${this.searchControl.value.trim().toLocaleLowerCase()}\u0000${this.statusFilter}`;
    this.dataSource.paginator?.firstPage();
  }

  private saveDepartment(mode: DepartmentDialogMode, department: Department | undefined, payload: DepartmentWrite): void {
    if (this.saving) return;
    if (this.previewMode) {
      const updated = mode === 'create'
        ? this.previewStore.create(payload)
        : department ? this.previewStore.update(department.id, payload) : undefined;
      if (updated) this.upsertDepartment(updated);
      this.showMessage(mode === 'create' ? 'Department added to preview data.' : 'Department updated in preview data.');
      return;
    }

    this.saving = true;
    const request = mode === 'create'
      ? this.departmentService.createDepartment(payload)
      : department
        ? this.departmentService.updateDepartment(department.id, payload)
        : undefined;

    if (!request) {
      this.saving = false;
      this.showMessage('Unable to save this department.');
      return;
    }

    request.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (savedDepartment) => {
        this.upsertDepartment(savedDepartment);
        this.showMessage(mode === 'create' ? 'Department added.' : 'Department updated.');
      },
      error: () => this.showMessage('The department could not be saved. Please try again.')
    });
  }

  private deleteDepartment(department: Department): void {
    if (this.saving) return;
    if (this.previewMode) {
      if (this.previewStore.delete(department.id)) {
        this.dataSource.data = this.previewStore.getAll();
        this.showMessage('Department removed from preview data.');
      }
      return;
    }

    this.saving = true;
    this.departmentService.deleteDepartment(department.id)
      .pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter((item) => item.id !== department.id);
          this.showMessage('Department deleted.');
        },
        error: () => this.showMessage('The department could not be deleted. Please try again.')
      });
  }

  private upsertDepartment(department: Department): void {
    const existingIndex = this.dataSource.data.findIndex((item) => item.id === department.id);
    const departments = [...this.dataSource.data];
    if (existingIndex === -1) departments.unshift(department);
    else departments[existingIndex] = department;
    this.dataSource.data = departments;
    this.applyFilters();
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 3500 });
  }
}
