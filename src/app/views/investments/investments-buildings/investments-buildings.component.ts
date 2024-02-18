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
      paragraph: 'Respaldada por la estabilidad y el potencial de crecimiento a largo plazo, este tipo de activos inmobiliarios tienen documentación legal que certifica la propiedad y los derechos asociados, lo que proporciona seguridad jurídica al inversionista.',
      imgUrl: 'assets/investment-1-2.png',
      buttons: [
        { title: 'Sólidez', subtitle: 'Invertir en ladrillos siempre es una buena inversión.', imgUrl: 'assets/icon-mobile-download.png' },
        { title: 'Se dueño de tu proyecto', subtitle: 'De principio a fin, serás el dueño 100% de tu proyecto con el respaldo de títulos de propiedad de USA.', imgUrl: 'assets/icon-person-create-account.png' },
        { title: 'Desarrollo sustentable', subtitle: 'Construimos en zonas de alto crecimiento demográfico con potencial a más de 20 años.', imgUrl: 'assets/icon-bank.png' },
        { title: 'Retornos de alto rendimiento', subtitle: 'Logra los mejores resultados de rendimiento dentro del real estate.', imgUrl: 'assets/icon-currency.png' },
      ]
    },
    step3: [
      { icon: 'assets/icon-house.png', link: '/inversiones/real-estate', title: 'Real Estate', subtitle: ' Inversión conservadora. Posibilidad de generar apalancamiento para reinversión.' },
      { icon: 'assets/icon-car.png', link: '/inversiones/rent-a-car', title: 'Rent a car', subtitle: 'Inversión de retornos mensuales fijos garantizados durante el plazo determinado.' },
      { icon: 'assets/icon-storage.png', link: '/inversiones/storage', title: 'Storage', subtitle: 'Inversión conservadora de alta seguridad y previsibilidad. Respaldada por el título de propiedad en EEUU.' },
    ]
  }
}
