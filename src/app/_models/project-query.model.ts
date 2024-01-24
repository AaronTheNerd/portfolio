import { Sort } from "../_enums/sort.enum";
import { Filter } from "./filter.model";

export class ProjectQuery {
  constructor(
    public search: string,
    public filter: Filter,
    public sort: Sort
  ) {}
}