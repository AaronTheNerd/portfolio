import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { Project } from './_models/project.model';
import { ProjectsService } from './_services/projects.service';

export const projectResolver: ResolveFn<Project | undefined> = (
  route: ActivatedRouteSnapshot,
) => {
  const title = route.params['title'];
  return inject(ProjectsService).getProjectByTitle(title);
};

export const titleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const title = route.params['title'];
  return `${title} | Details`;
}

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    title: "Aaron Barge's Portfolio",
    component: HomeComponent,
  },
  {
    path: "projects",
    title: "Aaron Barge's Projects",
    component: ProjectsComponent
  },
  {
    path: "projects/:title",
    title: titleResolver,
    component: ProjectDetailComponent,
    resolve: {
      project: projectResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
