import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ExpertsTeamComponent } from '../../components/experts-team/experts-team.component';
import {
  InvestmentProcessTestimoniesComponent,
} from '../../components/investment-process-testimonies/investment-process-testimonies.component';
import { NewsletterFormComponent } from '../../components/newsletter-form/newsletter-form.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { WhyGenComponent } from '../../components/why-gen/why-gen.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, WhyGenComponent, ExpertsTeamComponent,
    InvestmentProcessTestimoniesComponent, PartnersComponent,
    NewsletterFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private router: Router) {

  }

  quieroInvertir() {
    this.router.navigate(['contacto'])
  }
}
