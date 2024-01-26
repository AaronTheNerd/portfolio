import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-github-card",
  templateUrl: "./github-card.component.html",
  styleUrls: ["./github-card.component.scss"],
})
export class GithubCardComponent {
  @Input() link = "";
  gitIcon = faGithub;

  constructor() {}

  goToLink() {
    window.open(this.link, "_blank");
  }
}