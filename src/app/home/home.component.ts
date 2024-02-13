import { Component } from '@angular/core';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import { Icon } from '../_models/icon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  icons: Icon[] = [
    new Icon(
      faStackOverflow,
      "https://stackoverflow.com/users/9073813/aaron-barge",
      "Stack Overflow"),
    new Icon(
      faLinkedin,
      "https://www.linkedin.com/in/aaron-barge-6a75a619a/",
      "LinkedIn"),
    new Icon(
      faGithub,
      "https://github.com/AaronTheNerd",
      "GitHub"),
  ];
}
