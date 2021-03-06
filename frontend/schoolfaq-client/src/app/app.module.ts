import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatProgressBarModule,
  MatMenuModule,
  MatDialogModule,
  MatToolbarModule,
  MatCardModule

} from '@angular/material';
import { HomeComponent } from './home.component';
import { FaqComponent } from './faq.component';
import { AddquestionComponent } from './addquestion.component';
import { CategoriesService } from '../services/categories-service';
import { QuestionsService } from '../services/questions-service';
import { AnswerquestionComponent } from './answerquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    AddquestionComponent,
    AnswerquestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule],
  providers: [CategoriesService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
