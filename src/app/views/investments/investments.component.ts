import { Component, Input } from '@angular/core';
import { WhyGenComponent } from '../../components/why-gen/why-gen.component';
import { NewsletterFormComponent } from '../../components/newsletter-form/newsletter-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [WhyGenComponent, NewsletterFormComponent, RouterModule],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {

  @Input() params!: ParamsInvestmentScreen;

  constructor() { }
}





export type ParamsInvestmentScreen = {
  step1: {
    title: string;
    subtitle: string;
    buttonLink: string;
    imageUrl: string;
  }

  step2: {
    preTitle: string;
    title: string;
    paragraph: string;
    imgUrl: string;
    buttons: { imgUrl: string; title: string; subtitle: string }[]
  }

  step3: {
    icon: string;
    title: string;
    subtitle: string;
    link: string;
  }[]


}