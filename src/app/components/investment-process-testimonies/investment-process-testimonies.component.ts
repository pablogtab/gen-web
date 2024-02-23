import { Component, Input } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-investment-process-testimonies',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './investment-process-testimonies.component.html',
  styleUrl: './investment-process-testimonies.component.scss'
})
export class InvestmentProcessTestimoniesComponent {

  @Input('hideTestimonies') hideTestimonies = false
}
