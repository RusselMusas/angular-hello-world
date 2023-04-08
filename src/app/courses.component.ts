import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               <h3>{{ title }}</h3>`
})
export class CoursesComponent {

    title = "List of courses";

    getTitle() {
        return this.title;
    }

}