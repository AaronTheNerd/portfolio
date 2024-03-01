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
import { TableOfContentsComponent } from './project-detail/table-of-contents/table-of-contents.component';
import { SectionHeadingComponent } from './project-detail/dynamic/section-heading/section-heading.component';
import { SubsectionHeadingComponent } from './project-detail/dynamic/subsection-heading/subsection-heading.component';
import { SubsubsectionHeadingComponent } from './project-detail/dynamic/subsubsection-heading/subsubsection-heading.component';
import { FormatDatePipe } from './_pipes/format-date.pipe';
import { FormatLanguagePipe } from './_pipes/format-language.pipe';
import { ParagraphComponent } from './project-detail/dynamic/paragraph/paragraph.component'
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore"
import { provideAuth, getAuth } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProjectFormComponent } from './admin/project-form/project-form.component';
import { MultiInputComponent } from './admin/project-form/multi-input/multi-input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TimestampInputComponent } from './admin/project-form/timestamp-input/timestamp-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ContentInputComponent } from './admin/project-form/content-input/content-input.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CodeFileComponent } from './project-detail/dynamic/code-file/code-file.component';


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
    TableOfContentsComponent,
    SectionHeadingComponent,
    SubsectionHeadingComponent,
    SubsubsectionHeadingComponent,
    FormatDatePipe,
    FormatLanguagePipe,
    ParagraphComponent,
    LoginComponent,
    SpinnerComponent,
    ProjectFormComponent,
    MultiInputComponent,
    TimestampInputComponent,
    ContentInputComponent,
    CodeFileComponent
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
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    DragDropModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
