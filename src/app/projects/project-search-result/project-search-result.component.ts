import { Component, Input } from '@angular/core';
import { Project } from '../../_models/project.model';

@Component({
  selector: 'app-project-search-result',
  templateUrl: './project-search-result.component.html',
  styleUrl: './project-search-result.component.scss'
})
export class ProjectSearchResultComponent {
  @Input({ required: true }) project!: Project;
}
