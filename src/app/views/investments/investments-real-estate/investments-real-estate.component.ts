import { Component } from '@angular/core';
import { InvestmentsComponent, ParamsInvestmentScreen } from '../investments.component';

@Component({
  selector: 'app-investments-real-estate',
  standalone: true,
  imports: [InvestmentsComponent],
  templateUrl: './investments-real-estate.component.html',
  styleUrl: './investments-real-estate.component.scss'
})
export class InvestmentsRealEstateComponent {

  parametros: ParamsInvestmentScreen = {
    step1: {
      buttonLink: '',
      imageUrl: 'assets/investment-3-1.png',
      subtitle: 'Inversión conservadora con posibilidad de apreciación en el tiempo.',
      title: 'Invertir en Real Estate'
    },
    step2: {
      preTitle: 'INVERTIR EN REAL ESTATE',
      title: 'Capitalización para reinversión',
      paragraph: 'Inversión más conservadora. Bajos retornos, no garantizados pero posibilidad de apreciación en el tiempo. Posibilidad de generar apalancamiento para reinversión',
      imgUrl: 'assets/investment-3-2.png',
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
      { icon: 'assets/icon-storage.png', link: '/inversiones/storage', title: 'Storage', subtitle: 'Inversion conservadora de alta seguridad y previsibilidad. Respaldada por título de propiedad en EEUU.' },
    ]
  }
}

