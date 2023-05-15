import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent {
  nombre: string;
  porcentaje: number;

  constructor(private skillServ: SkillService, private router: Router) {}

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);

    this.skillServ.create(skill).subscribe(
      (data) => {
        alert('Skill creada!');
        window.location.reload();
      },
      (err) => {
        alert('Fallo al crear experiencia');
      }
    );
  }
}
