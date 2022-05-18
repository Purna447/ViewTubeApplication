import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
  formData:any={};
  constructor() { }

  ngOnInit(): void {
  }
  alert(data:any)
  {
    alert("Video Uploaded Successfully");
    this.formData=data;
    console.log(this.formData);

  }

}
