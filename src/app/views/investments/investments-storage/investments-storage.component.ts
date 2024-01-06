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
      subtitle: 'Inversión conservadora de alta seguridad y previsibilidad. Respaldada por el título de propiedad en EEUU.',
      title: 'Invertir en Storage'
    },
    step2: {
      preTitle: 'INVERTIR EN STORAGE',
      title: 'Seguridad y previsibilidad',
      paragraph: 'Inversión perfecta para personas conservadoras con su dinero. Permite seguridad y previsibilidad. Sólida por tratarse de Real Estate y respaldada por título de propiedad en EE. UU.',
      imgUrl: 'assets/investment-4-2.png',
      buttons: [
        { title: 'Seguridad y Respaldo', subtitle: 'La solidez de las garantías proporciona tranquilidad y protección a tu capital.', imgUrl: 'assets/icon-mobile-download.png' },
        { title: 'Retornos trimestrales estables', subtitle: 'Pago de retornos trimestrales fijos, asegurando ingresos estables a lo largo de todo el ciclo de inversión.', imgUrl: 'assets/icon-person-create-account.png' },
        { title: 'Respaldo legal USA', subtitle: 'Respaldo con título de propiedad en Estados Unidos.', imgUrl: 'assets/icon-bank.png' },
        { title: 'Flexibilidad en Ingreso y Egreso', subtitle: 'Fácil entrada y salida de la posición, proporcionando libertad de adaptarse según las condiciones del mercado.', imgUrl: 'assets/icon-currency.png' },
      ]
    },
    step3: [
      { icon: 'assets/icon-building.png', link: '/inversiones/construccion', title: 'Construcción', subtitle: 'Inversión mas conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-car.png', link: '/inversiones/rent-a-car', title: 'Rent a car', subtitle: ' Inversión de retornos mensuales fijos garantizados durante el plazo determinado.' },
      { icon: 'assets/icon-house.png', link: '/inversiones/real-estate', title: 'Real Estate', subtitle: 'Inversion conservadora de alta seguridad y previsibilidad. Respaldada por el título de propiedad en EEUU.' },
    ]
  }
}
