import { Component } from '@angular/core';
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

  ngOnInit() {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.5 });



    const elements = document.querySelectorAll('.progress');

    elements.forEach((el) => {
      observer.observe(el);
    });
  }



}
