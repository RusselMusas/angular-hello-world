import { Component } from "@angular/core";
import { CoursesService } from "./services/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               <h3>{{ title }}</h3>
               <input (keyup.enter)="onKeyup($event)">`
})
export class CoursesComponent {

    title = "List of courses";
    courses: string[] | undefined = undefined;

    constructor(private coursesService: CoursesService) {}

    onKeyup(event: any) {
        event.stopPropagation();
        // if(event.keyCode === 13) console.log("Enter was pressed")
        console.log("ENTER was pressed");
    }

    onSave($event: Event) {
        $event.stopPropagation(); // stop event bubbling
        console.log("Button was clicked: ", $event);
    }

    getTitle() {
        return this.title;
    }

    getCourses() {
        this.courses = this.coursesService.getCourses();
        console.log(this.courses);
    }

}