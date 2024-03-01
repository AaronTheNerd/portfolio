import { Injectable } from '@angular/core';

import "prismjs";
import "prismjs/components/prism-typescript";

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() { }

  highlight() {
    Prism.highlightAll();
  }
}
