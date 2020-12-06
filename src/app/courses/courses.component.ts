import { Component, OnInit } from '@angular/core';
import { Courses } from "../course.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
allCourses = [];
availableCourses = [];
myCourses = [];

constructor(){

}

  ngOnInit(): void {
    this.allCourses = [
      new Courses('Intro to Underwater Coding','LC105',['Mon','Wed'],'2:00 PM','3:30 PM',3),
      new Courses('Chai Tea Lattes and Coding','LC103',['Tue','Thurs'],'1:00 PM','2:30 PM',2),
      new Courses('Mental Management','LC250',['Mon','Wed'],'12:00 PM','1:30 PM',3),
      new Courses('Narcissism & Stack Overflow: A Case Study','LC411',['Mon','Wed'],'3:45 PM','4:30 PM',3),
      new Courses('Googling Like a Boss','LC115',['Tue','Thur'],'11:00 AM','12:00 PM',2),
      new Courses('Philosophy & Star Trek','LC140',['Tue','Fri'],'2:00 PM','3:30 PM',3),
      new Courses('Coding Logic with Spock','LC240',['Mon','Wed'],'4:00 PM','4:45 PM',3),
      new Courses('Irregular Expressions','LC317',['Mon','Wed'],'9:00 AM','10:00 AM',2),
      new Courses('Demystifying Asynchronicity','LC230',['Mon','Wed'],'2:00 PM','3:30 PM',3),
      new Courses('G Code Code Space','LC555',['Wed','Fri'],'10:00 AM','11:30 AM',3),
    ];

    this.availableCourses = this.allCourses.slice(0);
  }
  addCourse(index: number): void {
    this.myCourses.push(this.availableCourses[index]);
    this.availableCourses.splice(index,1);
  }
  removeCourse(index: number): void {
    this.availableCourses.push(this.myCourses[index]);
    this.myCourses.splice(index,1);
  }
  sumCredits(): number {
    let sum = 0;
    for (let i=0; i < this.myCourses.length; i++) {
      sum += this.myCourses[i].credits;
    }
    return sum;
  }

}
