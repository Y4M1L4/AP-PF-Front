import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiencias: Experiencia[] = [];
  isLogged = false;

  constructor(
    private experienciaService: ExperienciaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void {
    this.experienciaService.getAll().subscribe((data) => {
      this.experiencias = data;
    });
  }

  onDelete(id: number): void {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe((data) => {
        this.cargarExperiencia();
      });
    }
  }
}
