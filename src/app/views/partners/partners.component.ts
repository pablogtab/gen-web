import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InvestmentProcessTestimoniesComponent } from '../../components/investment-process-testimonies/investment-process-testimonies.component';
import { ExpertsTeamComponent } from '../../components/experts-team/experts-team.component';
import { NewsletterFormComponent } from '../../components/newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [MatIconModule, InvestmentProcessTestimoniesComponent, ExpertsTeamComponent, NewsletterFormComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {



  accordionClick(i: number) {
    let accordions = Array.from(document.getElementsByClassName('accordion'))
    accordions.filter((div, index) => index !== i).forEach(acc => { acc.classList.remove('active') })
    accordions[i].classList.toggle('active')
  }

}
