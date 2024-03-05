import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
  <div class="row" style="width: 100%; margin-left: 0px">
    <div class="col-xs-12 col-sm-11 col-md-10 mx-auto px-0 py-5">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: []
})
export class ArticleComponent {}
