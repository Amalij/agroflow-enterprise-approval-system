import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { REQUEST_TYPES, RequestType } from '../../requests/models/request.model';

interface RequestTypeOption {
  type: RequestType;
  path: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-request-type-selection',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './request-type-selection.component.html',
  styleUrl: './request-type-selection.component.scss'
})
export class RequestTypeSelectionComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly requestTypes: readonly RequestType[] = REQUEST_TYPES;
  readonly options: RequestTypeOption[] = [
    { type: 'IOU', path: 'iou', icon: 'account_balance_wallet', description: 'Request a cash advance for approved business expenses.' },
    { type: 'Petty Cash', path: 'petty-cash', icon: 'payments', description: 'Request funds for small operational purchases.' },
    { type: 'Procurement', path: 'procurement', icon: 'inventory_2', description: 'Start a purchase request for goods or services.' }
  ];

  selectedType?: RequestType;
  draftId = '';

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const pathType = params.get('type');
      this.selectedType = this.options.find((option) => option.path === pathType)?.type;
    });
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.draftId = params.get('draftId') ?? '';
    });
  }
}