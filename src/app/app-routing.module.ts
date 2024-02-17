import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard'

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LoginComponent } from './admin/login/login.component';
import { ProjectFormComponent } from './admin/project-form/project-form.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "projects/new",
    component: ProjectFormComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: "projects/:name",
    component: ProjectDetailComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
