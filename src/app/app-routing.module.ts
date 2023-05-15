import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'experiencia/edit/:id', component: EditExperienceComponent },
  { path: 'educacion/edit/:id', component: EditEducationComponent },
  { path: 'skill/edit/:id', component: EditSkillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
