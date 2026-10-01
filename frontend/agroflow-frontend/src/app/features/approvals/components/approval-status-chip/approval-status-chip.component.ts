import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { ApprovalStatus } from '../../models/approval.model';

@Component({
  selector: 'app-approval-status-chip',
  standalone: true,
  imports: [MatChipsModule],
  template: '<mat-chip-set><mat-chip [class]="\'approval-status-chip \' + statusTone">{{ status }}</mat-chip></mat-chip-set>',
  styles: `
    :host { display: inline-block; }
    .approval-status-chip { min-height: 23px; border-radius: 4px !important; font-size: 9px; font-weight: 700; }
    .approval-status-chip.pending { --mdc-chip-elevated-container-color: #fbf1df; --mdc-chip-label-text-color: #936322; }
    .approval-status-chip.changes-requested { --mdc-chip-elevated-container-color: #eaf1f5; --mdc-chip-label-text-color: #507389; }
    .approval-status-chip.approved { --mdc-chip-elevated-container-color: #eaf3e7; --mdc-chip-label-text-color: #36704b; }
    .approval-status-chip.rejected { --mdc-chip-elevated-container-color: #f8eae8; --mdc-chip-label-text-color: #9e504a; }
  `
})
export class ApprovalStatusChipComponent {
  @Input({ required: true }) status!: ApprovalStatus;

  get statusTone(): string { return this.status.toLocaleLowerCase().replaceAll(' ', '-'); }
}