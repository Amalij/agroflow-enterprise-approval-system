import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface CancelRequestDialogData {
  requestId: string;
  title: string;
}

@Component({
  selector: 'app-cancel-request-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './cancel-request-dialog.component.html',
  styleUrl: './cancel-request-dialog.component.scss'
})
export class CancelRequestDialogComponent {
  readonly data = inject<CancelRequestDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<CancelRequestDialogComponent, boolean>);

  cancel(): void { this.dialogRef.close(false); }
  confirm(): void { this.dialogRef.close(true); }
}