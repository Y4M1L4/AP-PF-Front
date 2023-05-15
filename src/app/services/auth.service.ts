import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = `${environment.URL}/auth`;

  constructor(private httpClient: HttpClient) {}

  public login(usuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + '/login', usuario);
  }

  public register(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/register', usuario);
  }
}
