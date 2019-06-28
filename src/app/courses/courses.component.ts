import { Component, OnInit } from '@angular/core';
import { Course } from '../courses';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];

  selectedCourse: Course;

  constructor( private courseService: CourseService ) { }

  ngOnInit() {
    this.getCourse();
  }


  getCourse(): void{
    this.courseService.getCourses()
    .subscribe(courses => this.courses = courses); 
  }


  
  onSelect(course: Course): void{
    this.selectedCourse = course;
  }


}
