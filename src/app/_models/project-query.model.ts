import { Sort } from "../_enums/sort.enum";
import { Filter, defaultFilter } from "./filter.model";

export class ProjectQuery {
  constructor(
    public search: string,
    public filter: Filter,
    public sort: Sort
  ) {}
}

export function defaultQuery() {
  return new ProjectQuery("", defaultFilter(), Sort.newest);
}