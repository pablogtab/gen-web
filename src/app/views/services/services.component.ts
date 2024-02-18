import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ExpertsTeamComponent } from '../../components/experts-team/experts-team.component';
import { InvestmentProcessTestimoniesComponent } from '../../components/investment-process-testimonies/investment-process-testimonies.component';
import { NewsletterFormComponent } from '../../components/newsletter-form/newsletter-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatIconModule, InvestmentProcessTestimoniesComponent, ExpertsTeamComponent, NewsletterFormComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {


  constructor(private router: Router) {

  }


  accordionClick(i: number) {
    let accordions = Array.from(document.getElementsByClassName('accordion'))
    accordions.filter((div, index) => index !== i).forEach(acc => { acc.classList.remove('active') })
    accordions[i].classList.toggle('active')
  }

  quieroInvertir() {
    this.router.navigate(['contacto'])
  }

}
