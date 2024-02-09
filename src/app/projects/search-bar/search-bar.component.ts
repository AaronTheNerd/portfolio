import { Component, OnInit } from '@angular/core';
import { QueryProjectsService } from '../../_services/query-projects.service';
import { ProjectQuery, defaultQuery } from '../../_models/project-query.model';
import { Sort } from '../../_enums/sort.enum';
import { MatSelectChange } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit{
  sortOptions: Sort[] = [
    Sort.newest,
    Sort.modified,
    Sort.lang_a_z,
    Sort.lang_z_a,
    Sort.title_a_z,
    Sort.title_z_a,
  ];
  query!: ProjectQuery;

  constructor(
    private queryService: QueryProjectsService,
    private dialog: MatDialog
  ) {}
  
  ngOnInit(): void {
    this.query = this.queryService.getQuery();
  }

  onSearchChange(event: Event) {
    const inputEvent = <InputEvent>(event);
    const target = <HTMLTextAreaElement>(inputEvent.target);
    this.query.search = target.value.trim();
    this.queryService.queryChanged.next(this.query);
  }

  openFilterDialog() {
    const filter = this.query.filter;
    const data = {...filter, includeLanguages: {...filter.includeLanguages}}
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.query.filter = result;
      this.queryService.queryChanged.next(this.query);
    })
  }

  onSortChange(selectChange: MatSelectChange) {
    this.query.sort = selectChange.value;
    this.queryService.queryChanged.next(this.query);
  }
}
