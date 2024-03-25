import { AfterContentChecked, Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../_models/project.model';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { FirestoreService } from '../_services/firestore.service';
import { DynamicComponent } from '../_models/dynamic-component.model';


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
    private auth: Auth,
    private router: Router,
    private firestore: FirestoreService,
  ) {}

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  deleteProject(): void {
    this.firestore.deleteProject(this.project!.id)
    .then(() => {
      this.router.navigate(["projects"]);
    })
  }

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      this.authenticated = user !== null;
    });
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

  ngDoCheck(): void {
    this._loadContent();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  private _loadContent() {
    this.dynamicContent.clear();
    for (const contentEntry of this.project!.content) {
      const contentRef: ComponentRef<DynamicComponent>= this.dynamicContent.createComponent(contentEntry.componentType);
      contentRef.instance.applyInputs(contentEntry.inputs, contentEntry.children);
    }
  }
}
