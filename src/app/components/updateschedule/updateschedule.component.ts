import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../shared/services/schedule.service'


@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {
   angForm : FormGroup;
   userSchedule: any = {}
   
  constructor(private route : ActivatedRoute,private router: Router,
    private scheduleService : ScheduleService, private fb: FormBuilder) {

      this.createForm();

   }
   
   ngOnInit() {
     let id = this.route.snapshot.params.id;

    this.route.params.subscribe(params => {
      this.scheduleService.editSchedule(id).subscribe(res =>{
        console.log("My res",res);
        this.userSchedule = res;
      })
    })
    // console.log("route",this.route.snapshot.params.id)
  }

   createForm(){
     this.angForm = this.fb.group({
       eventName: ['',Validators.required],
       eventDay: ['',Validators.required],
       eventStartTime: ['',Validators.required],
       eventEndTime: ['',Validators.required]
     })
   }

  updateSchedule(eventName,eventStartTime,eventEndTime,eventDay){
    let id = this.route.snapshot.params.id;

    this.route.params.subscribe(params => {
      this.scheduleService.updateSchedule(eventName,eventStartTime,eventEndTime,eventDay,id);
      
    })
  }

}
