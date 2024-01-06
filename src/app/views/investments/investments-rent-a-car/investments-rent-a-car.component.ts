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
      subtitle: ' Inversión de retornos mensuales fijos garantizados durante el plazo determinado.',
      title: 'Invertir en Rent a car'
    },
    step2: {
      preTitle: 'INVERTIR EN RENT A CAR',
      title: 'Retornos mensuales fijos y garantizados por contrato',
      paragraph: ' Invierte en una compañía con trayectoria de más de 12 años operando en Florida y en pleno proceso de crecimiento y expansión.',
      imgUrl: 'assets/investment-2-2.png',
      buttons: [
        { title: 'Retorno fijo mensual', subtitle: 'Recibe retornos mensuales fijos por tu aporte de capital para flota de la compañía.', imgUrl: 'assets/icon-mobile-download.png' },
        { title: 'Previsibilidad', subtitle: ' Garantiza tus cashflow durante el ciclo de duración de la inversión.', imgUrl: 'assets/icon-person-create-account.png' },
        { title: 'Crecimiento y desarrollo', subtitle: 'Haz crecer tu capital acompañando la expansión y progreso de una importante compañía americana.', imgUrl: 'assets/icon-bank.png' },
        { title: 'Seguridad', subtitle: 'Desarrolla tu patrimonio mientras contratos e instrumentos oficiales de Florida respaldan tu inversión.', imgUrl: 'assets/icon-currency.png' },
      ]
    },
    step3: [
      { icon: 'assets/icon-building.png', link: '/inversiones/construccion', title: 'Construcción', subtitle: 'Inversión respaldada por título de propiedad y contratos con alta seguridad jurídica. Proyecto con más de 20 años de horizonte de inversión.' },
      { icon: 'assets/icon-house.png', link: '/inversiones/real-estate', title: 'Real Estate', subtitle: 'Inversión más conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-storage.png', link: '/inversiones/storage', title: 'Storage', subtitle: 'Inversión conservadora de alta seguridad y previsibilidad. Respaldada por el título de propiedad en EEUU.' },
    ]
  }
}
