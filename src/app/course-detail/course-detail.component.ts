import { Component, OnInit, Input } from '@angular/core';
import { Course } from "../courses";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {


  @Input() course: Course;



  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location : Location
      ) { }

  ngOnInit() {
    this.getCourse();
    
  }


  getCourse(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
    .subscribe(course => this.course =course);
    console.log(this.course)
  }

  goBack(): void {
    this.location.back();
  }

}
