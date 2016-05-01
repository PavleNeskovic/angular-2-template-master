
import {Component} from "angular2/core";
import {Video} from "./videos";
import {AppComponent} from "./app.component";
@Component({
    selector:'playlist',
    templateUrl:'app/html/playlist.component.html',
    inputs: ['videos']
})
export class PlaylistComponent{
    videoCode: string = 'K26x2suHVHY';
    
    title:string;
    urlV:string;
    desc:string;

    
    constructor(){
        
    }
    
    onSelect(video:Video){
        this.videoCode = video.videoCode;
        console.log(JSON.stringify(video));

    }
    
    

}