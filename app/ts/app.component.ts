import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorComponent} from "./author.component";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html',
    directives: [CoursesComponent, AuthorComponent,PlaylistComponent]
})

export class AppComponent {}
