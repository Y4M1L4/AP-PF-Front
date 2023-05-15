import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  URL = `${environment.URL}/educacion`;
  
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL);
  }

  public getById(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(`${this.URL}/${id}`);
  }

  public create(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/${id}`);
  }
}
