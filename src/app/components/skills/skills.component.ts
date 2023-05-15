import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  isLogged = false;

  constructor(private skillServ: SkillService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarSkills(): void {
    this.skillServ.getAll().subscribe((data) => {
      this.skills = data;
    });
  }

  onDelete(id: number): void {
    if (id != undefined) {
      this.skillServ.delete(id).subscribe((data) => {
        this.cargarSkills();
      });
    }
  }
}
