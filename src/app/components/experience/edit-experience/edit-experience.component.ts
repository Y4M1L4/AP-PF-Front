import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css'],
})
export class EditExperienceComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.getById(id).subscribe(
      (data) => {
        this.experiencia = data;
      },
      (err) => {
        alert('Fallo al actualizar experiencia');
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.experienciaService.update(id, this.experiencia).subscribe(
      (data) => {
        alert('Experiencia actualizada');
        this.router.navigate(['/']);
      },
      (err) => {
        alert('Fallo al actualizar experiencia');
        this.router.navigate(['/']);
      }
    );
  }
}
