import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavComponent } from './sidenav/sidenav.component'
import { MatIconModule } from "@angular/material/icon";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './projects/projects.component';
import { LanguageIconComponent } from './projects/language-icon/language-icon.component';
import { ProjectSearchResultComponent } from './projects/project-search-result/project-search-result.component';
import { TruncatePipe } from './_pipes/truncate.pipe';
import { ImageCarouselComponent } from './projects/project-search-result/image-carousel/image-carousel.component';
import { SearchBarComponent } from './projects/search-bar/search-bar.component';
import { ArticleComponent } from './article.component'
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatDialogModule } from "@angular/material/dialog"
import { MatSelectModule } from "@angular/material/select"
import { FormsModule } from '@angular/forms';
import { FilterDialogComponent } from './projects/search-bar/filter-dialog/filter-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { GithubCardComponent } from './project-detail/github-card/github-card.component'
import { MatCardModule } from '@angular/material/card';
import { SectionHeadingComponent } from './project-detail/section-heading/section-heading.component';
import { SubsectionHeadingComponent } from './project-detail/subsection-heading/subsection-heading.component';
import { SubsubsectionHeadingComponent } from './project-detail/subsubsection-heading/subsubsection-heading.component';
import { FormatDatePipe } from './_pipes/format-date.pipe';
import { FormatLanguagePipe } from './_pipes/format-language.pipe';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { SpinnerComponent } from './spinner/spinner.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CodeFileComponent } from './project-detail/code-file/code-file.component';
import { VideoComponent } from './project-detail/video/video.component';
import { PythonProjectWizardComponent } from './project-detail/projects/python-project-wizard/python-project-wizard.component';
import { EllipseApproxComponent } from './project-detail/projects/ellipse-approx/ellipse-approx.component';
import { ChristmasTreeComponent } from './project-detail/projects/christmas-tree/christmas-tree.component';
import { TriangularMeshComponent } from './project-detail/projects/triangular-mesh/triangular-mesh.component';
import { AudioVisualizerComponent } from './project-detail/projects/audio-visualizer/audio-visualizer.component';
import { RoombaComponent } from './project-detail/projects/roomba/roomba.component';
import { SortingVisualizerComponent } from './project-detail/projects/sorting-visualizer/sorting-visualizer.component';
import { FooterComponent } from './projects/project-search-result/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { KatexComponent } from './katex/katex.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ProjectsComponent,
    LanguageIconComponent,
    ProjectSearchResultComponent,
    TruncatePipe,
    ImageCarouselComponent,
    SearchBarComponent,
    ArticleComponent,
    FilterDialogComponent,
    ProjectDetailComponent,
    GithubCardComponent,
    SectionHeadingComponent,
    SubsectionHeadingComponent,
    SubsubsectionHeadingComponent,
    FormatDatePipe,
    FormatLanguagePipe,
    SpinnerComponent,
    CodeFileComponent,
    VideoComponent,
    PythonProjectWizardComponent,
    EllipseApproxComponent,
    ChristmasTreeComponent,
    TriangularMeshComponent,
    AudioVisualizerComponent,
    RoombaComponent,
    SortingVisualizerComponent,
    FooterComponent,
    KatexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule,
    MatTooltipModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
