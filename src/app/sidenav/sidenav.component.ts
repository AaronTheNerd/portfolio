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
    //new SidenavItem("person", "About Me", ["about"]),
    new SidenavItem("code", "Projects", ["projects"]),
    //new SidenavItem("menu_book", "Reading List", ["reading"]),
  ];
}
