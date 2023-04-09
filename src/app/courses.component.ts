import { Component } from "@angular/core";
import { CoursesService } from "./services/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               <h3>{{ title }}</h3>
               <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
               </ul>`
})
export class CoursesComponent {

    title = "List of courses";
    courses: string[] | undefined = undefined;

    constructor(private coursesService: CoursesService) {
        this.getCourses();
    }

    getTitle() {
        return this.title;
    }

    getCourses() {
        this.courses = this.coursesService.getCourses();
        console.log(this.courses);
    }

}