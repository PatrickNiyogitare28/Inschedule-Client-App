import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule} from '@angular/common/http';
// import {Http} from '@angular/common/http';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { MatDialog} from '@angular/material'
import { DeletemodelComponent } from '../../components/material/deletemodel/deletemodel.component'
import { AccoplishmodelComponent } from '../../components/material/accoplishmodel/accoplishmodel.component'

import { AfterDeleteSnackComponent } from '../../components/material/after-delete-snack/after-delete-snack.component'
import {MatSnackBar} from '@angular/material/snack-bar';
// import { GetScheduleComponent } from '../../components/get-schedule/get-schedule.component';


import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
 
  URL = 'http://localhost:4000/schedule/manage';
  updateURL = 'http://localhost:4000/schedule/manage/weekSchedule/update-schedule'
  avatarURL = 'http://localhost:4000/schedule/avatar/';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute,private dialog: MatDialog,
    private MatSnackBar: MatSnackBar) { }

  getUserSchedule(){
    let headers = new HttpHeaders();
    // headers.append('x-auth-token',localStorage.getItem('userToken'))
    
    
   console.log("my header**"+JSON.stringify(headers));
    let id = localStorage.getItem('user_id');

    return this.http.get(`${this.URL}/weekSchedule/${id}`,{headers:new HttpHeaders()
    .set('x-auth-token',localStorage.getItem('userToken'))});

    
    
  }

  editSchedule(_id){

   
    console.log("I got id**",_id);
    return this.http.get(`${this.URL}/weekSchedule/edit-schedule/${_id}`)
  }

  updateSchedule(eventName,eventStartTime,eventEndTime,eventDay,id){
    const obj = {
      eventName,
      eventDay,
      eventStartTime,
      eventEndTime,
      
    }
    // console.log("My object",obj)
    // const headers = new HttpHeaders;
    // headers.append('x-auth-token',localStorage.getItem('userToken'))
    this.http.post(`${this.updateURL}/${id}`,obj)
    .subscribe(res => {
      this.router.navigate(['get-schedule']);
    })

  }
  
  setSchedule(eventName,eventStartTime,eventEndTime,eventDay){
    let userId = localStorage.getItem('user_id');
    console.log("user Id",userId);

    const obj = {
      userId,
      eventName,
      eventStartTime,
      eventEndTime,
      eventDay
    }
    return this.http.post(`${this.URL}/weekSchedule`,obj)
    // .subscribe(
    //   res => {
    //     this.router.navigate(['get-schedule'])
    //   }
    // )

  }
  
  removeSchedule(id){
    return this.http.delete(`${this.URL}/remove/${id}`)
    // .subscribe(res => {
    //   // window.location.reload()
    //   let dialRes = this.dialog.open(DeletemodelComponent)
    //   dialRes.afterClosed().subscribe(result => {
    //     window.location.reload();
    //   })
    // })
    
  }

  

  getAccoplished(scheduleId){
    console.log("Hello am accoplishing**");
    let userId = localStorage.getItem('user_id');
    const obj = {
      userId
    }

    return this.http.post(`${this.URL}/weekSchedule/accoprished/${scheduleId}`,obj).subscribe(res => {
      this.dialog.open(AccoplishmodelComponent);
      
      // console.log("Accoplished /"+userId+" /"+scheduleId)
      // this.router.navigate(['get-schedule']);
  
      
    })
  }

  getAccoplishedTasks(){
    
    let id = localStorage.getItem('user_id');

    return this.http.get(`${this.URL}/weekSchedule/accoprished/${id}`);

  }
  getAccoplishedTasksData(scheduleId){
    return this.http.get(`${this.URL}/weekSchedule/accoprishedData/${scheduleId}`);

  }
 
  resetSchedule(scheduleId){
    let eventStatus = 1;
    const obj = {
      eventStatus
    }
    return this.http.post(`${this.URL}/weekSchedule/re-set-schedule/${scheduleId}`,obj)
    .subscribe(res => {
      this.router.navigate(['get-schedule']);
    })
  }
 
  // adding to do method
  addToDo(taskName,status,index){
    let userId = localStorage.getItem('user_id');
    const obj={
       userId,
       taskName,
       status,
       index
    }
   
    return this.http.post(`${this.URL}/weekSchedule/todo`,obj)
  }

  getToDo(){
    let userId = localStorage.getItem('user_id');
    return this.http.get(`${this.URL}/weekSchedule/todo/${userId}`);
    
  }

  updateToDo(taskName,status,index){
    // console.log("Helloooo****** "+taskName+status+index);
    let userId = localStorage.getItem('user_id');
    const obj={
       userId,
       taskName,
       status,
       index
    }
   
    return this.http.post(`${this.URL}/weekSchedule/UpdateTodo`,obj).subscribe(res =>{
      console.log("Done####");
   
    })
    
  }

  removeToDoTask(taskName){
    let userId = localStorage.getItem('user_id');
  
    return this.http.delete(`${this.URL}/weekSchedule/todo/removeTask/${userId}/${taskName}`)

  }

  getAvatar(){
    return this.http.get(`${this.avatarURL}/get-avatars`);
  }

  sendMail(userName,email,message){
    const obj={
    userName,
      email,
      message,
     
   }

   return this.http.post(`http://localhost:4000/schedule/mail/comment`,obj).subscribe(res =>{
   
 
  })
  
  }

  getNotifications(day,currentTime){
 let  userId =  localStorage.getItem('user_id');

 return this.http.get(`http://localhost:4000/schedule/notifications/to-notify/${userId}/${day}/${currentTime}`);
  }

}
