import { Component } from '@angular/core';
import { QueryProjectsService } from '../../_services/query-projects.service';
import { ProjectQuery } from '../../_models/project-query.model';
import { defaultFilter } from '../../_models/filter.model';
import { Sort } from '../../_enums/sort.enum';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  sortOptions: Sort[] = [
    Sort.lang_a_z,
    Sort.lang_z_a,
    Sort.newest,
    Sort.title_a_z,
    Sort.title_z_a,
  ];
  query = new ProjectQuery("", defaultFilter(), Sort.newest);

  constructor(private queryService: QueryProjectsService) {}
  
  onSearchChange(event: Event) {
    const inputEvent = <InputEvent>(event);
    const target = <HTMLTextAreaElement>(inputEvent.target);
    this.query.search = target.value.trim();
    this.queryService.query(this.query);
  }

  onSortChange(selectChange: MatSelectChange) {
    this.query.sort = selectChange.value;
    this.queryService.query(this.query);
  }
}
