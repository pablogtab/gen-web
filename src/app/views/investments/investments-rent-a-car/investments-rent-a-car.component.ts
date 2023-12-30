import { Component } from '@angular/core';
import { InvestmentsComponent, ParamsInvestmentScreen } from '../investments.component';

@Component({
  selector: 'app-investments-rent-a-car',
  standalone: true,
  imports: [InvestmentsComponent],
  templateUrl: './investments-rent-a-car.component.html',
  styleUrl: './investments-rent-a-car.component.scss'
})
export class InvestmentsRentACarComponent {

  parametros: ParamsInvestmentScreen = {
    step1: {
      buttonLink: '',
      imageUrl: 'assets/investment-2-1.png',
      subtitle: 'Inversión mas conservadora. Posibilidad de generar apalancamiento para reinversión.',
      title: 'Invertir en Rent a car'
    },
    step2: {
      preTitle: 'INVERTIR EN RENT A CAR',
      title: 'Retornos fijos garantizados',
      paragraph: 'Invierte en compañía con trayectoria de más de 12 años operando en la plaza y en pleno proceso de expansión. Es una inversión de retornos mensuales fijos garantizados durante el plazo determinado.',
      imgUrl: 'assets/investment-2-2.png',
      buttons: [
        { title: 'Download FarmVest', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-mobile-download.png' },
        { title: 'Create account', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-person-create-account.png' },
        { title: 'Link your bank account', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-bank.png' },
        { title: 'Start Investing', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-currency.png' },
      ]
    },
    step3: [
      { icon: 'assets/icon-building.png', link: '/inversiones/construccion', title: 'Construcción', subtitle: 'Inversión mas conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-house.png', link: '/inversiones/real-estate', title: 'Real Estate', subtitle: 'Inversión de retornos mensuales fijos garantizados durante el plazo determinando.' },
      { icon: 'assets/icon-storage.png', link: '/inversiones/storage', title: 'Storage', subtitle: 'Inversion conservadora de alta seguridad y previsibilidad. Respaldada por título de propiedad en EEUU.' },
    ]
  }
}
