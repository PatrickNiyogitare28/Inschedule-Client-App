import { Component, OnInit } from '@angular/core';
import  { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { ScheduleService} from '../../../../shared/services/schedule.service'
import {MatSnackBar} from '@angular/material/snack-bar';
import { AfterDirectAddSnackComponent } from '../../after-direct-add-snack/after-direct-add-snack.component';
// import { GetScheduleComponent } from '../../../get-schedule/get-schedule.component';




@Component({
  selector: 'app-direct-add-mon',
  templateUrl: './direct-add-mon.component.html',
  styleUrls: ['./direct-add-mon.component.css']
})
export class DirectAddMonComponent implements OnInit {
   angForm : FormGroup;
  constructor(private fb: FormBuilder,private scheduleService: ScheduleService,
    private MatSnackBar:MatSnackBar) { 
    this.createForm();
  }
  
  createForm(){
     this.angForm = this.fb.group({
       eventName :['',Validators.required],
       eventDay: ['',Validators.required],
       eventStartTime: ['',Validators.required],
       eventEndTime: ['',Validators.required],
       

     })
  }
  setSchedule(eventName,eventStartTime,eventEndTime,eventDay){
    this.scheduleService.setSchedule(eventName,eventStartTime,eventEndTime,eventDay).subscribe((res:any)=>{
      this.MatSnackBar.open(res.event_name,"Added to schedule",{
        duration:2000
      })
    // this.scheduleService.pushInArray("mon",res);
     
    })
    
  }
  ngOnInit() {
  }

}
