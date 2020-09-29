import { Component, OnInit } from '@angular/core';
import  { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { ScheduleService } from '../../shared/services/schedule.service'
// import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { Router , ActivatedRoute, Params } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-setschedule',
  templateUrl: './setschedule.component.html',
  styleUrls: ['./setschedule.component.css','../responsive/set-schedule-res/set-schedule-res.component.css']
})
export class SetscheduleComponent implements OnInit {
  angForm: FormGroup;

  date: Date = new Date();

  settings = {
   bigBenner: true,
   timePicker: false,
   format: 'dd-MM-yyyy hh:mm a',
   defaultOpen: false,
   closeOnSelect: false, 

  }
  
  constructor(private fb: FormBuilder,private scheduleService: ScheduleService ,
   private router:Router ) { 
      this.createFrom();
    }
    createFrom(){
       this.angForm = this.fb.group({
         eventName: ['',Validators.required],
         eventStartTime: ['',Validators.required],
         eventEndTime: ['',Validators.required],
         eventDay: ['',Validators.required],

       });
    }

     setSchedule(eventName,eventStartTime,eventEndTime,eventDay){
       this.scheduleService.setSchedule(eventName,eventStartTime,eventEndTime,eventDay).subscribe(res => {
       
          this.router.navigate(['get-schedule'])
        }
      );
       
     }
     
   
  
  ngOnInit() {
     
     
  }
}
