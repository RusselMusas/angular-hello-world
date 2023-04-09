import { Component } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors: string[] | undefined;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

}
