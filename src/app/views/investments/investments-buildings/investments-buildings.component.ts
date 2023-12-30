import { Component } from '@angular/core';
import { InvestmentsComponent, ParamsInvestmentScreen } from '../investments.component';

@Component({
  selector: 'app-investments-buildings',
  standalone: true,
  imports: [InvestmentsComponent],
  templateUrl: './investments-buildings.component.html',
  styleUrl: './investments-buildings.component.scss'
})
export class InvestmentsBuildingsComponent {

  parametros: ParamsInvestmentScreen = {
    step1: {
      buttonLink: '',
      imageUrl: 'assets/investment-1-1.png',
      subtitle: 'Respaldada por título de propiedad y contratos con seguridad jurídica, aportarás capital a un proyecto con más de 20 años de horizonte de inversión.',
      title: 'Invertir en Construcción'
    },
    step2: {
      preTitle: 'INVERTIR EN CONSTRUCCIÓN',
      title: 'Estabilidad y potencial de crecimiento',
      paragraph: 'Respaldada por la estabilidad y el potencial de crecimiento a largo plazo, este tipo de activos inmobiliarios involucrados tienen documentación legal que certifica la propiedad y los derechos asociados que proporciona seguridad jurídica al inversionista.',
      imgUrl: 'assets/investment-1-2.png',
      buttons: [
        { title: 'Download FarmVest', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-mobile-download.png' },
        { title: 'Create account', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-person-create-account.png' },
        { title: 'Link your bank account', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-bank.png' },
        { title: 'Start Investing', subtitle: 'Start by downloading FarmVest app on your Android or IOS', imgUrl: 'assets/icon-currency.png' },
      ]
    },
    step3: [
      { icon: 'assets/icon-car.png', link: '/inversiones/rent-a-car', title: 'Rent a car', subtitle: 'Inversión mas conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-house.png', link: '/inversiones/real-estate', title: 'Real Estate', subtitle: 'Inversión de retornos mensuales fijos garantizados durante el plazo determinando.' },
      { icon: 'assets/icon-storage.png', link: '/inversiones/storage', title: 'Storage', subtitle: 'Inversion conservadora de alta seguridad y previsibilidad. Respaldada por título de propiedad en EEUU.' },
    ]
  }
}
