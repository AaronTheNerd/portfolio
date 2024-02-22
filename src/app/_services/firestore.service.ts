import { Injectable, inject } from '@angular/core';
import { DocumentData, Firestore, addDoc, collection, collectionData, updateDoc, doc, DocumentReference, deleteDoc } from '@angular/fire/firestore';
import { Observable, map, tap } from 'rxjs';
import { Project } from '../_models/project.model';
import { ProjectCollection, ProjectDocument } from '../_models/project-document.model';
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
    return collectionData(itemCollection, {idField: "id"}).pipe(
      map((data: DocumentData) => {
        return this._cleanCollectionData(data);
      }),
      tap(() => {
        this.loading = false;
      })
    );
  }

  private _cleanCollectionData(data: DocumentData): Project[] {
    const rawProjects = data as ProjectCollection;
    const projects: Project[] = [];
    rawProjects.forEach((rawProject) => {
      projects.push(this.project_converter.convertRawProject(rawProject));
    });
    return projects;
  }

  addProject(raw_project: ProjectDocument): Promise<DocumentReference> {
    const itemCollection = collection(this.firestore, "projects");
    let raw_project_entry = Object.assign({}, raw_project);
    delete raw_project_entry.id;
    return addDoc(itemCollection, raw_project_entry);
  }

  updateProject(raw_project: ProjectDocument): Promise<void> {
    const id = raw_project.id!;
    const itemCollection = collection(this.firestore, "projects");
    const docReference = doc(itemCollection, id);
    let raw_project_entry = Object.assign({}, raw_project) as {[key: string]: any};
    delete raw_project_entry['id'];
    return updateDoc(docReference, raw_project_entry);
  }
  
  deleteProject(id: string): Promise<void> {
    const itemCollection = collection(this.firestore, "projects");
    const docReference = doc(itemCollection, id);
    return deleteDoc(docReference);
  }

}
