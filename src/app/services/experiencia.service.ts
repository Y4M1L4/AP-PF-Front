import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  URL = `${environment.URL}/experiencias`;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.URL);
  }

  public getById(id: number | undefined): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.URL + '/' + id);
  }

  public create(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.URL, experiencia);
  }

  public update(
    id: number | undefined,
    experiencia: Experiencia
  ): Observable<any> {
    console.log('Experiencia: ', experiencia);

    return this.httpClient.put<any>(this.URL + '/' + id, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + '/' + id);
  }
}
