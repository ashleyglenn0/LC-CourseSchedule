import { Component, OnInit } from '@angular/core';
import { Course } from "../course.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [];
  allCourses = [];
  availableCourses = [];
  myCourses = [];

  constructor(courses, allCourses, availableCourses, myCourses) {
    this.courses = courses;
    this.allCourses = allCourses;
    this.availableCourses = availableCourses;
    this.myCourses = myCourses;
   }

  ngOnInit(): void {
    this.allCourses = [
      new Course('Intro to Underwater Coding','LC105',['Mon','Wed'],'2:00 PM','3:30 PM',3),
      new Course('Coding with Chai Tea','LC103',['Tue','Thurs'],'1:00 PM','2:30 PM',2),
      new Course('Mental Management','LC250',['Mon','Wed'],'12:00 PM','1:30 PM',3),
      new Course('Narcissism & Stack Overflow: A Case Study','LC411',['Mon','Wed'],'3:45 PM','4:30 PM',3),
      new Course('Googling Like a Boss','LC115',['Tue','Thur'],'11:00 AM','12:00 PM',2),
      new Course('Philosophy & Star Trek','LC140',['Tue','Fri'],'2:00 PM','3:30 PM',3),
      new Course('Coding Logic with Spock','LC240',['Mon','Wed'],'4:00 PM','4:45 PM',3),
      new Course('Irregular Expressions','LC317',['Mon','Wed'],'9:00 AM','10:00 AM',2),
      new Course('Demystifying Asynchronicity','LC230',['Mon','Wed'],'2:00 PM','3:30 PM',3),
      new Course('G Code Code Space','LC555',['Wed','Fri'],'10:00 AM','11:30 AM',3),
    ];
    this.availableCourses = this.allCourses.slice(0);
  }

}
