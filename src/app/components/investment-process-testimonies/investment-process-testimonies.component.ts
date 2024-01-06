import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-process-testimonies',
  standalone: true,
  imports: [],
  templateUrl: './investment-process-testimonies.component.html',
  styleUrl: './investment-process-testimonies.component.scss'
})
export class InvestmentProcessTestimoniesComponent {

  @Input('hideTestimonies') hideTestimonies = false
}
