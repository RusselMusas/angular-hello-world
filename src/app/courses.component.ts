import { Component } from "@angular/core";
import { CoursesService } from "./services/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               <h3>{{ title }}</h3>
               <button [style.backgroundColor]="isActive ? 'green' : 'white'">Save</button>`
})
export class CoursesComponent {

    title = "List of courses";
    courses: string[] | undefined = undefined;
    isActive = true;
    // List of DOM objects styles properties: https://www.w3schools.com/jsref/dom_obj_style.asp

    constructor(private coursesService: CoursesService) {}

    getTitle() {
        return this.title;
    }

    getCourses() {
        this.courses = this.coursesService.getCourses();
        console.log(this.courses);
    }

}