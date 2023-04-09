import { Component } from "@angular/core";
import { CoursesService } from "./services/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               <h3>{{ title }}</h3>
               <button class="btn btn-primary" [class.active]="isActive">Submit</button>`
})
export class CoursesComponent {

    title = "List of courses";
    courses: string[] | undefined = undefined;
    isActive = true;

    constructor(private coursesService: CoursesService) {}

    getTitle() {
        return this.title;
    }

    getCourses() {
        this.courses = this.coursesService.getCourses();
        console.log(this.courses);
    }

}