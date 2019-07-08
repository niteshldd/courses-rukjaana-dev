import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LecturesDetailsComponent } from './lectures-details/lectures-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'courses', component: CoursesComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: CourseDetailComponent},
  {path: 'detail/:name/:id', component: LecturesDetailsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
