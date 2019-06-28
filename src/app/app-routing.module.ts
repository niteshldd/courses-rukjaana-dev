import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  { path: 'courses', component: CoursesComponent }
]


@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
