import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; //module import katw

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TrainerComponent} from "../Components/trainer/trainer.component";
import { StudentComponent } from 'src/Components/student/student.component';
import { MovieComponent } from '../Components/movie/movie.component';
import {FormsModule} from '@angular/forms';
import { AddDashBetweenPipe } from '../CustomPipes/add-dash-between.pipe';
import { RatingComponent } from '../SharedComponents/rating/rating.component';
import { ProductComponent } from '../Components/product/product.component';
import { NobelComponent } from '../Components/nobel/nobel.component';
import { GithubComponent } from '../Components/github/github.component';

@NgModule({
  declarations: [
    AppComponent,TrainerComponent,StudentComponent, MovieComponent, AddDashBetweenPipe, RatingComponent, ProductComponent, NobelComponent, GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
