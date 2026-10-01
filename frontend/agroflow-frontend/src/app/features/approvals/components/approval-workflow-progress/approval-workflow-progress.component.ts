import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ApprovalWorkflowStep } from '../../models/approval-workflow.model';

@Component({
  selector: 'app-approval-workflow-progress',
  standalone: true,
  imports: [DatePipe, MatIconModule],
  templateUrl: './approval-workflow-progress.component.html',
  styleUrl: './approval-workflow-progress.component.scss'
})
export class ApprovalWorkflowProgressComponent {
  @Input({ required: true }) steps: ApprovalWorkflowStep[] = [];
}