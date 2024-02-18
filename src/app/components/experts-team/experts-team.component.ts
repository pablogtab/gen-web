import { Component } from '@angular/core';

@Component({
  selector: 'app-experts-team',
  standalone: true,
  imports: [],
  templateUrl: './experts-team.component.html',
  styleUrl: './experts-team.component.scss'
})
export class ExpertsTeamComponent {

  navigate(url: string) {
    //open url in new window

    window.open(url, '_blank');
  }
}
