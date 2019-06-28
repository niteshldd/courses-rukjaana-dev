import { Injectable } from '@angular/core';
import { Course } from './courses';
import { COURSES } from './mock-courses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private messageService: MessageService) { }

  getCourses(): Observable<Course[]> {
    this.messageService.add('MessageService: fectched courses');
    return of (COURSES);
  }

 


  
}
