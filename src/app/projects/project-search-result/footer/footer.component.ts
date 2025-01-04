import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../_models/project.model';

@Component({
  selector: 'app-project-search-result-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input({ required: true }) project!: Project;

  starIcon = faStar;
  githubIcon = faGithub;
  plusIcon = faPlus;
}
