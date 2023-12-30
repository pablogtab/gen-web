import { Component } from '@angular/core';
import { InvestmentsComponent, ParamsInvestmentScreen } from '../investments.component';

@Component({
  selector: 'app-investments-storage',
  standalone: true,
  imports: [InvestmentsComponent],
  templateUrl: './investments-storage.component.html',
  styleUrl: './investments-storage.component.scss'
})
export class InvestmentsStorageComponent {
  parametros: ParamsInvestmentScreen = {
    step1: {
      buttonLink: '',
      imageUrl: 'assets/investment-4-1.png',
      subtitle: 'Inversión conservadora de alta seguridad y previsibilidad. Respaldada por título de propiedad en EEUU.',
      title: 'Invertir en Storage'
    },
    step2: {
      preTitle: 'INVERTIR EN STORAGE',
      title: 'Seguridad y previsibilidad',
      paragraph: 'Inversión perfecta para personas conservadoras con su dinero. Permite alta seguridad y previsibilidad. Muy sólida por tratarse de Real Estate y respaldada por título de propiedad en EE. UU.',
      imgUrl: 'assets/investment-4-2.png',
      buttons: [
        { title: 'Download FarmVest', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-mobile-download.png' },
        { title: 'Create account', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-person-create-account.png' },
        { title: 'Link your bank account', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-bank.png' },
        { title: 'Start Investing', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-currency.png' },
      ]
    },
    step3: [
      { icon: 'assets/icon-building.png', link: '/inversiones/construccion', title: 'Construcción', subtitle: 'Inversión mas conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-car.png', link: '/inversiones/rent-a-car', title: 'Rent a car', subtitle: 'Inversión mas conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-house.png', link: '/inversiones/real-estate', title: 'Real Estate', subtitle: 'Inversión de retornos mensuales fijos garantizados durante el plazo determinando.' },
    ]
  }
}
