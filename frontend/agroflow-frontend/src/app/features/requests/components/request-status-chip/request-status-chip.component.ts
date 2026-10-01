import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { WorkflowStatus } from '../../models/request.model';

@Component({
  selector: 'app-request-status-chip',
  standalone: true,
  imports: [MatChipsModule],
  template: '<mat-chip-set><mat-chip [class]="\'status-chip \' + statusTone">{{ status }}</mat-chip></mat-chip-set>',
  styles: `
    :host { display: inline-block; }
    .status-chip { min-height: 23px; border-radius: 4px !important; font-size: 9px; font-weight: 700; }
    .status-chip.draft { --mdc-chip-elevated-container-color: #eef1ed; --mdc-chip-label-text-color: #647267; }
    .status-chip.pending { --mdc-chip-elevated-container-color: #fbf1df; --mdc-chip-label-text-color: #936322; }
    .status-chip.approved { --mdc-chip-elevated-container-color: #eaf3e7; --mdc-chip-label-text-color: #36704b; }
    .status-chip.rejected { --mdc-chip-elevated-container-color: #f8eae8; --mdc-chip-label-text-color: #9e504a; }
    .status-chip.cancelled { --mdc-chip-elevated-container-color: #f0f1ef; --mdc-chip-label-text-color: #667168; }
    .status-chip.returned { --mdc-chip-elevated-container-color: #eaf1f5; --mdc-chip-label-text-color: #507389; }
    .status-chip.completed { --mdc-chip-elevated-container-color: #eaf3e7; --mdc-chip-label-text-color: #36704b; }
  `
})
export class RequestStatusChipComponent {
  @Input({ required: true }) status!: WorkflowStatus;

  get statusTone(): string {
    return this.status.toLocaleLowerCase();
  }
}