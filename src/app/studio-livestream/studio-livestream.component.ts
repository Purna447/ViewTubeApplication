import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { StartDateValidate } from '../CustomValidation'

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  liveStreamForm= new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(1)]),
    StartDate: new FormControl('',[Validators.required,StartDateValidate()]),
    StartTime: new FormControl('',[Validators.required]),
    EndDate: new FormControl('',[Validators.required]),
    EndTime: new FormControl('',[Validators.required]),
    details: new FormControl('', [Validators.required, Validators.minLength(10)]),
    
  });

  get title() { return this.liveStreamForm.controls['title']; }
  get StartDate() { return this.liveStreamForm.controls['StartDate']; }
  get StartTime() { return this.liveStreamForm.controls['StartTime']; }
  get EndDate() { return this.liveStreamForm.controls['EndDate']; }
  get EndTime() { return this.liveStreamForm.controls['EndTime']; }
  get details() { return this.liveStreamForm.controls['details']; }
  

  onSubmit() {
    console.log(this.liveStreamForm.value);
    alert("live stream details saved successfully");
  }
}
