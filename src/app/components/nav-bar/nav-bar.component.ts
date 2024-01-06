import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, RouterModule, ClickOutsideDirective],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  toggle() {
    
    const menu = document.getElementById('link-menu')
    menu?.classList.toggle('active')

  }

  toggleSidenav() {
    const pages = document.getElementById('pages')
    pages?.classList.toggle('active')
  }

  onClickOutside() {
    const menu = document.getElementById('link-menu')
    if (menu?.classList.toString().includes('active'))
      menu?.classList.toggle('active')

    const pages = document.getElementById('pages')
    if (pages?.classList.toString().includes('active'))
      pages?.classList.remove('active')
  }
}
