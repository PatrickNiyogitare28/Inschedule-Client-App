import { Component, OnInit } from '@angular/core';
import UserSchedule from '../../UserSchedule';
import { ScheduleService } from '../../shared/services/schedule.service'
import {ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material' 
import { UpdatescheduleComponent } from '../updateschedule/updateschedule.component';
import { DeletemodelComponent } from '../material/deletemodel/deletemodel.component';
import { DirectAddMonComponent } from '../material/directAddOns/direct-add-mon/direct-add-mon.component';
import { DirectAddTueComponent } from '../material/directAddOns/direct-add-tue/direct-add-tue.component';
import { DirectAddWedComponent } from '../material/directAddOns/direct-add-wed/direct-add-wed.component';
import { DirectAddThurComponent } from '../material/directAddOns/direct-add-thur/direct-add-thur.component';
import { DirectAddFriComponent } from '../material/directAddOns/direct-add-fri/direct-add-fri.component';
import { DirectAddSatComponent } from '../material/directAddOns/direct-add-sat/direct-add-sat.component';
import { DirectAddSunComponent } from '../material/directAddOns/direct-add-sun/direct-add-sun.component';
import { AfterDeleteSnackComponent } from '../../components/material/after-delete-snack/after-delete-snack.component'
import {MatSnackBar} from '@angular/material/snack-bar';
import { AfterDirectAddSnackComponent } from '../../components/material/after-direct-add-snack/after-direct-add-snack.component';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-get-schedule',
  templateUrl: './get-schedule.component.html',
  styleUrls: ['./get-schedule.component.css','../responsive/get-schedule-res/get-schedule-res.component.css']
})
export class GetScheduleComponent implements OnInit {
   schedule_mon: UserSchedule[] = [];
   schedule_tue: UserSchedule[] = [];
   schedule_wed: UserSchedule[] = [];
   schedule_thur: UserSchedule[] = [];
   schedule_fri: UserSchedule[] = [];
   schedule_sat: UserSchedule[] = [];
   schedule_sun: UserSchedule[] = [];
   public buttonName="";
  //  schedule: UserSchedule[];

 



  constructor(private scheduleService : ScheduleService,private route: ActivatedRoute,private dialog: MatDialog,
    private MatSnackBar: MatSnackBar) { }

    drop(event: CdkDragDrop<string[]>) {
    
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
      
      for(var i=0;i<this.schedule_mon.length;i++){
      
          this.compliteDragDrop(this.schedule_mon[i].eventName,this.schedule_mon[i].eventStartTime,this.schedule_mon[i].eventEndTime,"Monday",this.schedule_mon[i]._id)
         }

      for(var i=0;i<this.schedule_tue.length;i++){
      
          this.compliteDragDrop(this.schedule_tue[i].eventName,this.schedule_tue[i].eventStartTime,this.schedule_tue[i].eventEndTime,"Tuesday",this.schedule_tue[i]._id)
         }

      for(var i=0;i<this.schedule_wed.length;i++){
      
          this.compliteDragDrop(this.schedule_wed[i].eventName,this.schedule_wed[i].eventStartTime,this.schedule_wed[i].eventEndTime,"Wensday",this.schedule_wed[i]._id)
         } 
         
      for(var i=0;i<this.schedule_thur.length;i++){
      
          this.compliteDragDrop(this.schedule_thur[i].eventName,this.schedule_thur[i].eventStartTime,this.schedule_thur[i].eventEndTime,"Thursday",this.schedule_thur[i]._id)
         }
        
      for(var i=0;i<this.schedule_fri.length;i++){
      
          this.compliteDragDrop(this.schedule_fri[i].eventName,this.schedule_fri[i].eventStartTime,this.schedule_fri[i].eventEndTime,"Friday",this.schedule_fri[i]._id)
         } 
        
      for(var i=0;i<this.schedule_sat.length;i++){
      
          this.compliteDragDrop(this.schedule_sat[i].eventName,this.schedule_sat[i].eventStartTime,this.schedule_sat[i].eventEndTime,"Saturday",this.schedule_sat[i]._id)
         }           
   
      for(var i=0;i<this.schedule_sun.length;i++){
      
          this.compliteDragDrop(this.schedule_sun[i].eventName,this.schedule_sun[i].eventStartTime,this.schedule_sun[i].eventEndTime,"Sunday",this.schedule_sun[i]._id)
         }

    }

  ngOnInit() {
    this.scheduleService.getUserSchedule().subscribe((data: UserSchedule[])=>{
      // this.schedule = data;

       for(var i = 0;i<data.length;i++){
         if(data[i].dayName === "Monday"){
          this.schedule_mon.push(data[i]);
         }
         else if(data[i].dayName === "Tuesday"){
          this.schedule_tue.push(data[i])
         }
         else if(data[i].dayName === "Wensday"){
          this.schedule_wed.push(data[i])
         }
         else if(data[i].dayName === "Thursday"){
          this.schedule_thur.push(data[i])
         }
         else if(data[i].dayName === "Friday"){
          this.schedule_fri.push(data[i])
         }
         else if(data[i].dayName === "Saturday"){
          this.schedule_sat.push(data[i])
         }
         else if(data[i].dayName === "Sunday"){
          this.schedule_sun.push(data[i])
         }

       }
    })
  }

  
  //removing schedules

  removeSchedule_mon(id){
   
this.scheduleService.removeSchedule(id).subscribe((res:any) => {
        this.compreteDeleteAction(this.schedule_mon,res._id,res.eventName);

  })
}
removeSchedule_tue(id){
   
  this.scheduleService.removeSchedule(id).subscribe((res:any) => {
    // this.MatSnackBar.open(res.eventName, "Removed", {
    //   duration: 2000,
    // });
    // this.schedule_tue.splice(id,1);
    this.compreteDeleteAction(this.schedule_tue,res._id,res.eventName);
     
})
}
removeSchedule_wed(id){
   
  this.scheduleService.removeSchedule(id).subscribe((res:any) => {
    // this.MatSnackBar.open(res.eventName, "Removed", {
    //   duration: 2000,
    // });
    // this.schedule_wed.splice(id,1);
    this.compreteDeleteAction(this.schedule_wed,res._id,res.eventName);

})
}
removeSchedule_thur(id){
   
  this.scheduleService.removeSchedule(id).subscribe((res:any) => {
    // this.MatSnackBar.open(res.eventName, "Removed", {
    //   duration: 2000,
    // });
    // this.schedule_thur.splice(id,1);
    this.compreteDeleteAction(this.schedule_thur,res._id,res.eventName);

})
}
removeSchedule_fri(id){
   
  this.scheduleService.removeSchedule(id).subscribe((res:any) => {
    // this.MatSnackBar.open(res.eventName, "Removed", {
    //   duration: 2000,
    // });
    // this.schedule_fri.splice(id,1);
    this.compreteDeleteAction(this.schedule_fri,res._id,res.eventName);

})
}
removeSchedule_sat(id){
   
  this.scheduleService.removeSchedule(id).subscribe((res:any) => {
    // this.MatSnackBar.open(res.eventName, "Removed", {
    //   duration: 2000,
    // });
    // this.schedule_sat.splice(id,1);
    this.compreteDeleteAction(this.schedule_sat,res._id,res.eventName);

})
}
removeSchedule_sun(id){
   
  this.scheduleService.removeSchedule(id).subscribe((res:any) => {
    // this.MatSnackBar.open(res.eventName, "Removed", {
    //   duration: 2000,
    // });
    // this.schedule_sun.splice(id,1);
    this.compreteDeleteAction(this.schedule_sun,res._id,res.eventName);

})
}




//get accoplished
  getAccoplished(scheduleId){
   this.scheduleService.getAccoplished(scheduleId);
  }


  // ******* direct addings
  directAddOnMon(){
    this.dialog.open(DirectAddMonComponent)
    // .subscribe((res:any)=>{
    //   this.MatSnackBar.open(res.eventName,"Added on Mon",{
    //    duration:2000,    
    //   })
    // })
  }

  directAddOnTue(){
    this.dialog.open(DirectAddTueComponent)
  }

  directAddOnWed(){
    this.dialog.open(DirectAddWedComponent)
  }

  directAddOnThur(){
    this.dialog.open(DirectAddThurComponent)
  }

  directAddOnFri(){
    this.dialog.open(DirectAddFriComponent)
  }

  directAddOnSat(){
    this.dialog.open(DirectAddSatComponent)
  }

  directAddOnSun(){
    this.dialog.open(DirectAddSunComponent)
  }

  pushInArray(eventDay,res){
    if(eventDay=="mon"){
       this.schedule_mon.push(res);
    }
  }

  compreteDeleteAction(array,eventId,eventName){
    console.log("id*********+++ "+eventId);
    for(var i=0;i<array.length;i++){
       var index = 0;
      if(array[i]._id==eventId){
          index = i;
          array.splice(index, 1);
      }
    }
    

    this.MatSnackBar.open(eventName, "Removed", {
      duration: 2000,
    });
  }

  compliteDragDrop(eventName,eventStartTime,eventEndTime,eventDay,schdId){
    this.scheduleService.updateSchedule(eventName,eventStartTime,eventEndTime,eventDay,schdId);
  }
}

