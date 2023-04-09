import { Component } from "@angular/core";
import { CoursesService } from "./services/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               <h3>{{ title }}</h3>
               <button class="btn btn-primary">Submit</button>`
})
export class CoursesComponent {

    title = "List of courses";
    courses: string[] | undefined = undefined;
    imageUrl = "https://thumbs.dreamstime.com/b/panorama-de-for%C3%AAt-avec-des-rayons-de-lumi%C3%A8re-du-soleil-53826213.jpg";
    
    constructor(private coursesService: CoursesService) {}

    getTitle() {
        return this.title;
    }

    getCourses() {
        this.courses = this.coursesService.getCourses();
        console.log(this.courses);
    }

}