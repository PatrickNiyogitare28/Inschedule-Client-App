import { Component, OnInit } from '@angular/core';
// import UserSchedule from '../../UserSchedule';
import Accoplished from '../../Accoplished';
import { ScheduleService } from '../../shared/services/schedule.service'
import {ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material' 
import AccoplishedData from '../../AccoplishedData';


@Component({
  selector: 'app-accoplished',
  templateUrl: './accoplished.component.html',
  styleUrls: ['./accoplished.component.css','../responsive/accomplished-res/accomplished-res.component.css']
})
export class AccoplishedComponent implements OnInit {
  accoplished: Accoplished[] = [];
  accoplishedData: AccoplishedData[];
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
     this.scheduleService.getAccoplishedTasks().subscribe((data: Accoplished[]) => {
       for(var i=0;i<data.length;i++){
             this.accoplished.push(data[i]);
             this.scheduleService.getAccoplishedTasksData(data[i]._id).subscribe((accopData: AccoplishedData[])=>{
               this.accoplishedData = accopData; 
              
             })
       }
     })
  }

  resetSchedule(scheduleId){
    this.scheduleService.resetSchedule(scheduleId)
  }

  removeSchedule(scheduleId){
    this.scheduleService.removeSchedule(scheduleId).subscribe(res=>{
      this.accoplished.splice(scheduleId,1);
    })
  }
}
