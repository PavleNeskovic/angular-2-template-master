

import {Component} from "angular2/core";
import {AuthorService} from "./author.service";
@Component({
    selector:'authors',
    template:`<h2> {{title}} </h2>
                <ul>
                    <li *ngFor="#author of authors">
                        {{author}}
                    </li>
                </ul>
                `,
    providers:[AuthorService]
})
export class AuthorComponent{
    title = "Authors";
    authors;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}