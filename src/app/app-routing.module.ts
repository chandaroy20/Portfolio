import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {RecentWorksComponent} from './recent-works/recent-works.component';
import {InterviewQuestionsComponent} from './interview-questions/interview-questions.component';
import {SkillsetComponent} from './skillset/skillset.component'


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  {path:'',component:RecentWorksComponent},
  {path:'interview',component:InterviewQuestionsComponent},
  {path:'skills', component:SkillsetComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
