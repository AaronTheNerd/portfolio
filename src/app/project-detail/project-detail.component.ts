import { Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../_models/project.model';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  @Input() project!: Project;
  authenticated: boolean = false;
  subscriptions: Subscription[] = [];
  @ViewChild("dynamicContent", {
    static: true,
    read: ViewContainerRef
  }) dynamicContent!: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    if (!this.project) {
      const subscription = this.route.data.subscribe((result) => {
        this.project = result['project'];
        if (!this.project) {
          this.location.back();
        }
      });
      this.subscriptions.push(subscription);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
