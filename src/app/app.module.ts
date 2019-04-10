import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecentWorksComponent } from './recent-works/recent-works.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { SkillsetComponent } from './skillset/skillset.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentWorksComponent,
    ContactComponent,
    InterviewQuestionsComponent,
    SkillsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
