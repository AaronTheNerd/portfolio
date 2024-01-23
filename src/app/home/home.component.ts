import { Component } from '@angular/core';
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Icon } from '../_models/icon.model';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  icons: Icon[] = [
    new Icon(faTwitter, "https://twitter.com/bargeaaron"),
    new Icon(faStackOverflow, "https://stackoverflow.com/users/9073813/aaron-barge"),
    new Icon(faLinkedin, "https://www.linkedin.com/in/aaron-barge-6a75a619a/"),
    new Icon(faGithub, "https://github.com/AaronTheNerd"),
    new Icon(faEnvelope, "mailto:bargeaaron@gmail.com")
  ];
}
