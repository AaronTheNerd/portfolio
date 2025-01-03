import { Component } from '@angular/core';
import { SidenavItem } from '../_models/sidenav-item.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  sidenavItems: SidenavItem[] = [
    new SidenavItem("home", "Home", ["home"]),
    new SidenavItem("code", "Projects", ["projects"]),
  ];
}
