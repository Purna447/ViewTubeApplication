import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { VideoService } from '../services/video.service';
import * as moment from 'moment';
import  'moment-duration-format';
import  'moment-duration-format';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {

  video$:any=[];
  
  videoObservable: Observable<any> = new Observable<any>();
  ngOnInit(): void {
    
  }
  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService) { 
    this.activatedRoute.params.subscribe(data=> {
      this.videoObservable = videoService.getVideo(data['videoId']);
    })
  }
}

  



