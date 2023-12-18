import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WhyGenComponent } from '../../components/why-gen/why-gen.component';
import { ExpertsTeamComponent } from '../../components/experts-team/experts-team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, WhyGenComponent, ExpertsTeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor() {

  }
}
