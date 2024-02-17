import { Injectable, inject } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map, tap } from 'rxjs';
import { Project } from '../_models/project.model';
import { ProjectDocument } from '../_models/project-document.model';
import { ProjectConverterService } from './project-converter.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);
  loading: boolean = true;

  constructor(
    public project_converter: ProjectConverterService
  ) {}

  getProjects(): Observable<Project[]> {
    const itemCollection = collection(this.firestore, "projects");
    return collectionData(itemCollection).pipe(
      map((data: DocumentData) => {
        return this._cleanCollectionData(data);
      }),
      tap(() => {
        this.loading = false;
      })
    );
  }

  private _cleanCollectionData(data: DocumentData): Project[] {
    const rawProjects = data as ProjectDocument;
    const projects: Project[] = [];
    rawProjects.forEach((rawProject) => {
      projects.push(this.project_converter.convertRawProject(rawProject));
    });
    return projects;
  }

  
}
