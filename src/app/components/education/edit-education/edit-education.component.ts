import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private eduService: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduService.getById(id).subscribe(
      (data) => {
        this.educacion = data;
      },
      (err) => {
        alert('Fallo al traer educacion');
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.eduService.update(id, this.educacion).subscribe(
      (data) => {
        alert('Educacion actualizada');
        this.router.navigate(['/']);
      },
      (err) => {
        alert('Fallo al actualizar educacion');
        this.router.navigate(['/']);
      }
    );
  }
}
