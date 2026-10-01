import { CurrencyPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { finalize } from 'rxjs';

import { AdministrationService } from '../services/administration.service';
import { ApprovalConfiguration } from '../models/administration.model';
import { ApprovalConfigurationDialogComponent, ApprovalConfigurationDialogData } from './approval-configuration-dialog.component';

@Component({
  selector: 'app-approval-configuration',
  standalone: true,
  imports: [CurrencyPipe, MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTooltipModule],
  templateUrl: './approval-configuration.component.html',
  styleUrl: './administration-pages.component.scss'
})
export class ApprovalConfigurationComponent implements OnInit {
  readonly service = inject(AdministrationService);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);
  readonly displayedColumns = ['requestType', 'department', 'approvalLevel', 'approverRole', 'amountRange', 'status', 'actions'];
  configurations: ApprovalConfiguration[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.errorMessage = '';
    this.service.getApprovalConfigurations().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (configurations) => { this.configurations = configurations; this.loading = false; },
      error: () => { this.loading = false; this.errorMessage = this.service.errorMessage(); }
    });
  }

  openConfiguration(configuration: ApprovalConfiguration, mode: 'view' | 'edit'): void {
    const data: ApprovalConfigurationDialogData = { configuration, mode };
    this.dialog.open<ApprovalConfigurationDialogComponent, ApprovalConfigurationDialogData, ApprovalConfiguration>(ApprovalConfigurationDialogComponent, {
      width: 'min(560px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      if (result) this.save(result);
    });
  }

  toggleStatus(configuration: ApprovalConfiguration, active: boolean): void {
    this.service.setApprovalConfigurationStatus(configuration.id, active).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.configurations = this.configurations.map((item) => item.id === updated.id ? updated : item);
        this.message(`Approval route ${active ? 'activated' : 'deactivated'}${this.service.previewMode() ? ' in preview data' : ''}.`);
      },
      error: () => this.message('The approval route status could not be updated.')
    });
  }

  private save(configuration: ApprovalConfiguration): void {
    this.service.saveApprovalConfiguration(configuration).pipe(finalize(() => undefined), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.configurations = this.configurations.map((item) => item.id === updated.id ? updated : item);
        this.message(`Approval route saved${this.service.previewMode() ? ' to preview data' : ''}.`);
      },
      error: () => this.message('The approval route could not be saved.')
    });
  }

  private message(text: string): void { this.snackBar.open(text, 'Dismiss', { duration: 3500 }); }
}