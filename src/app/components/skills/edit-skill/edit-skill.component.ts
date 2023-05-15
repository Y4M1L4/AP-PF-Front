import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
})
export class EditSkillComponent {
  skill: Skill = null;

  constructor(
    private skillServ: SkillService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillServ.getById(id).subscribe(
      (data) => (this.skill = data),
      (err) => {
        alert(err.message);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillServ.update(id, this.skill).subscribe(
      (data) => this.router.navigate(['/']),
      (err) => {
        alert(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
