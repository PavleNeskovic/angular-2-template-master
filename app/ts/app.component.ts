import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorComponent} from "./author.component";
import {PlaylistComponent} from "./playlist.component";
import {Video} from "./videos";

@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html',
    directives: [CoursesComponent, AuthorComponent,PlaylistComponent]
})

export class AppComponent {
    videos:Array<Video>;
    videoid;

    constructor(){
        this.videos = [
            new Video(1,"Nested Components","f8qBeaGe2S4","Explaining nested components"),
            new Video(2,"Passing Data to Components","bKWDKmHvF78","Explaining passing data to components")
        ]
    }

    addVideo(title,urlV,desc){
        //console.log(title);
        // this.title = title;
        // this.urlV = urlV;
        // this.desc = desc;

        this.videoid = urlV.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if(this.videoid != null) {
            console.log("video id = ",this.videoid[1]);
            this.videos.push(new Video(this.videos.length+1,title,this.videoid[1],desc));
        } else {
            console.log("The youtube url is not valid.");
        }


    }



}
