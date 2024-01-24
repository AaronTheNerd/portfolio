import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
  <div class="row w-100">
    <div class="col-xs-12 col-sm-10 col-md-9 mx-auto py-5">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: []
})
export class ArticleComponent {}
