import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
// import { LoginmodelComponent } from '../components/material/loginmodel/loginmodel.component'



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL = 'http://localhost:4000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,public router: Router,
    ){}

  signUp(name,email,password,avatarName){
      const obj = {
          name,
          email,
          password,
          avatarName
      }
      console.log(obj);
      return this.http.post(`${this.API_URL}/register`,obj).subscribe(res =>{
          sessionStorage.setItem('display','signIn')
          this.router.navigate(['inschedule']);
      })
    }
   


  signIn(email,password) {
      const obj ={
          email,
          password
      }
  
   return this.http.post(`${this.API_URL}/login`, obj)
   
  }

  updateUser(userName,avatarName){
    let userId = localStorage.getItem('user_id')
    const obj={
      userId,
      userName,
      avatarName
    }

    return this.http.post(`${this.API_URL}/user/update-user`,obj);
  }

  

  getAccessToken() {
    return localStorage.getItem('user_id');
  }

  get isLoggedIn(): boolean {
  
    let authId = localStorage.getItem('user_id');
    return (authId !== null) ? true : false;
  }

  get isLoggedOut(): boolean {
  
    let authId = localStorage.getItem('user_id');
    return (authId !== null) ? false : true;
  }


  get displaySignIn(): boolean {
  
    let display = sessionStorage.getItem('display');
    return (display == 'signIn') ? true : false;
  }
  get displaySignUp(): boolean {
  
    let display = sessionStorage.getItem('display');
    return (display == 'signUp') ? true : false;
  }

  get displayRateSection():boolean{
    let display = sessionStorage.getItem('display');
    return (display == 'rate')?true:false;
  }
  get displayAddToDo():boolean{
    let display = sessionStorage.getItem('display');
    return (display == 'addToDo')?true:false;
  }
  get displayAvatarBlock():boolean{
    let display = sessionStorage.getItem('display');
    return (display == 'avatarBlock')? true: false;
  }
  get displayMobileSideBar():boolean{
    let display = sessionStorage.getItem('display');
    return(display == 'mobileSideBar')?true:false;
  }


  logout() {
    if (localStorage.removeItem('user_id') == null) {
      sessionStorage.setItem('display','signIn');
      this.router.navigate(['inschedule']);
    }
  }

  
  getUserProfile(id: any){
    return this.http.get(`${this.API_URL}/profile/${id}`)
  }
  

  getTheProfile(id){
    // let id = localStorage.getItem('user_id');
    return this.http.get(`${this.API_URL}/profile/${id}`)


  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
