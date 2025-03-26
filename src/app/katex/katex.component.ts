import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import katex from "katex";

@Component({
  selector: 'app-katex',
  templateUrl: './katex.component.html'
})
export class KatexComponent implements AfterViewInit {
  @Input({required: true}) tex!: string;
  @ViewChild('ptex') texElement?: ElementRef;
  
  ngAfterViewInit() {
    katex.render(this.tex, this.texElement?.nativeElement);
  }
}
