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
      paragraph: 'Inversión más conservadora. Retornos moderados, no garantizados, pero con posibilidad de apreciación en el tiempo. Posibilidad de generar apalancamiento para reinversión.',
      imgUrl: 'assets/investment-3-2.png',
      buttons: [
        { title: 'Conservadora y de respaldo', subtitle: 'Respaldada por sólidos contratos e instrumentos financieros, garantizando la seguridad de tus fondos.', imgUrl: 'assets/icon-mobile-download.png' },
        { title: 'Apalancamiento financiero bancario', subtitle: 'Posibilidad de utilizar las mismas propiedades como garantía para apalancamiento financiero bancario.', imgUrl: 'assets/icon-person-create-account.png' },
        { title: 'Dinamismo en Ingresos y Egresos', subtitle: 'Modalidades de ingreso/egreso altamente dinámicas por el mercado.', imgUrl: 'assets/icon-bank.png' },
        { title: 'Sostenible a Largo Plazo', subtitle: 'Inversión a largo plazo con una previsión sólida de apreciación, asegurando crecimiento constante y sostenible de tu capital.', imgUrl: 'assets/icon-currency.png' },
      ]
    },
    step3: [
      { icon: 'assets/icon-building.png', link: '/inversiones/construccion', title: 'Construcción', subtitle: 'Inversión mas conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-car.png', link: '/inversiones/rent-a-car', title: 'Rent a car', subtitle: 'Inversión de retornos mensuales fijos garantizados durante el plazo determinado.' },
      { icon: 'assets/icon-storage.png', link: '/inversiones/storage', title: 'Storage', subtitle: 'Inversion conservadora de alta seguridad y previsibilidad. Respaldada por el título de propiedad en EEUU.' },
    ]
  }
}

