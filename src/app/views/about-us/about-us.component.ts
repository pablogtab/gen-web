import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ExpertsTeamComponent } from '../../components/experts-team/experts-team.component';
import { InvestmentProcessTestimoniesComponent } from '../../components/investment-process-testimonies/investment-process-testimonies.component';
import { NewsletterFormComponent } from '../../components/newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatIconModule, InvestmentProcessTestimoniesComponent, ExpertsTeamComponent, NewsletterFormComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  accordionClick(i: number) {
    let accordions = Array.from(document.getElementsByClassName('accordion'))
    accordions.filter((div, index) => index !== i).forEach(acc => { acc.classList.remove('active') })
    accordions[i].classList.toggle('active')
  }

  accordion2Click(i: number) {
    let accordions = Array.from(document.getElementsByClassName('accordion-light'))
    accordions.filter((div, index) => index !== i).forEach(acc => { acc.classList.remove('active') })
    accordions[i].classList.toggle('active')
  }
}
