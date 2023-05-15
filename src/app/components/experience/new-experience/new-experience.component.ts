import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css'],
})
export class NewExperienceComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  tipoEmpleo: string = '';
  esTrabajoActual: boolean = false;

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const exp = new Experiencia(
      this.nombre,
      this.descripcion,
      this.tipoEmpleo,
      this.esTrabajoActual
    );
    this.experienciaService.create(exp).subscribe(
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
