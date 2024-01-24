import { Component, Input } from '@angular/core';
import { Project } from '../../_models/project.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DisplayLanguageService } from '../../_services/display-language.service';

@Component({
  selector: 'app-project-search-result',
  templateUrl: './project-search-result.component.html',
  styleUrl: './project-search-result.component.scss'
})
export class ProjectSearchResultComponent {
  @Input({ required: true }) project!: Project;
  starIcon = faStar;
  githubIcon = faGithub;

  constructor(public displayLanguage: DisplayLanguageService) {}
}
