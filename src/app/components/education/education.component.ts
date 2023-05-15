import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educacion: Educacion[] = [];
  isLogged = false;

  constructor(
    private eduService: EducacionService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.eduService.getAll().subscribe((data) => {
      this.educacion = data;
    });
  }

  onDelete(id: number): void {
    if (id != undefined) {
      this.eduService.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }
}
