import { Component } from '@angular/core';
import { SidenavItem } from '../_models/sidenav-item.model';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/logo.svg")
    );
  }
  sidenavItems: SidenavItem[] = [
    new SidenavItem("Home", ["home"], { svgIcon: "logo" }),
    new SidenavItem("Projects", ["projects"], { fontIcon: "code" }),
  ];
}
