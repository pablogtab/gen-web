import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-why-gen',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './why-gen.component.html',
  styleUrl: './why-gen.component.scss'
})
export class WhyGenComponent {

  constructor() { }

  ngAfterViewInit() {

    setTimeout(
      () => {
        this.onScrollEvent()
      }, 50)

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    const element = document.getElementById('animate');

    if (element && !element.classList.contains('animate')) {
      let bound = element.getBoundingClientRect()
      const yElement = bound.top
      const y = window.innerHeight
      if (yElement < (y - bound.height / 2)) {
        element.classList.add('animate')
      }
    }

  }


}
