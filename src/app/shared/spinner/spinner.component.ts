import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.services';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="overlay" *ngIf="isLoading$ | async">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  isLoading$ = this.spinnerService.isLoading$;
  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {}
}
