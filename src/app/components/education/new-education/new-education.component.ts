import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css'],
})
export class NewEducationComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  esActual: boolean = false;

  constructor(private eduService: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const edu = new Educacion(this.nombre, this.descripcion, this.esActual);
    this.eduService.create(edu).subscribe(
      (data) => {
        alert('Experiencia creada!');
        window.location.reload();
      },
      (err) => {
        alert('Fallo al crear experiencia');
      }
    );
  }
}
