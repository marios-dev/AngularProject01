import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from 'src/Components/github/github.component';
import { MovieComponent } from 'src/Components/movie/movie.component';
import { Movies } from 'src/Components/movie/movieMockUp';
import { NobelComponent } from 'src/Components/nobel/nobel.component';
import { ProductComponent } from 'src/Components/product/product.component';
import { StudentComponent } from 'src/Components/student/student.component';
import { TrainerComponent } from 'src/Components/trainer/trainer.component';

const routes: Routes = [
  { path: 'Movies', component: MovieComponent },
  { path: 'Students', component: StudentComponent },
  { path: 'Trainers', component: TrainerComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Nobel', component: NobelComponent },
  { path: 'Github', component: GithubComponent },
  { path: '**', component: MovieComponent } //ERRORCOMPONENT
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
