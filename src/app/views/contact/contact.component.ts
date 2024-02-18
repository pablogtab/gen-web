import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsletterFormComponent } from '../../components/newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NewsletterFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = "info@genprojectusa.com";
  subject: string = "";
  message: string = "";


  constructor() { }
}
