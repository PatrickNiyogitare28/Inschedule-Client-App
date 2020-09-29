import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './shared/auth.service';
import { ScheduleService } from './shared/services/schedule.service';
import  UserProfile  from './shared/UserProfile';
import {MatDialog} from '@angular/material';
import { AccountComponent } from './components/account/account.component';
// import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { FormBuilder, FormGroup } from "@angular/forms";
import { longStackSupport } from 'q';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./components/signin/signin.component.css','./components/signup/signup.component.css',
'./components/responsive/app-comp-responsive/app-comp-responsive.component.css']
})

export class AppComponent implements OnInit{
  signinForm: FormGroup;
  signupForm: FormGroup;

  public loggedInUserName:any='';
  public loggedInUserEmail:any='';
  public loggedInUserProfileAvatar:any = '';
  public userProfileAvatar:any = '';


  public errorMessage:any = '';
 
  // public userProfName:any='Niyo';
  public show:boolean = true;
  public buttonName:any = '../assets/icons/showing.png';
  public time:any='';

  public rateClicks=0;

  avatarArr=[];
  currentUser: UserProfile[];

  userSentMessage=[];
  constructor(public authService: AuthService,public dialog: MatDialog,public route: ActivatedRoute,public router: Router
    ,public ScheduleSer:ScheduleService,
    public fb: FormBuilder
   
   
    ) {

      this.signinForm = this.fb.group({
        email: [''],
        password: ['']
      })

      this.signupForm = this.fb.group({
        name: [''],
        email: [''],
        password: ['']
      })
     }

   
   
  logout() {
  this.authService.logout()

    
   }
//    makeEditable(){
//     Document.getElementById('userProfileName').setAttribute('disablede','false');
// }
   openDialog(){
     
     this.dialog.open(AccountComponent);
   }
  
   getProfile(){
   for(var i=0;i<this.userSentMessage.length;i++){
      this.userSentMessage.splice(i,1);
   }

    let id = localStorage.getItem('user_id');
    // console.log("User Id to get Profile*** "+id);
    this.authService.getTheProfile(id).subscribe((data: UserProfile[])=>{
    this.currentUser = data;
    
    })
   this.router.navigate(['schedule-pg'])

   }

   displayForm(item){
     
     sessionStorage.setItem('display',item);
     this.router.navigate(['inschedule'])
   }
   

   toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
  
      this.buttonName = "../assets/icons/showing.png"
    else
    this.buttonName = "../assets/icons/hidding.png"
    
  }

//handle login
loginUser(email,password) {
  this.authService.signIn(email,password)
  .subscribe((Response: any) => {
      
    if(Response.status == 200){
      sessionStorage.removeItem('display'); 
      let value = setTheItem(Response.id);
      
       if(value == 1){
       
        localStorage.setItem('userToken',Response.token);
       
        let id = localStorage.getItem('user_id');

        // console.log("User Id to get Profile*** "+id);
        this.authService.getTheProfile(id).subscribe((data:any)=>{
        // this.currentUser = data;
        this.loggedInUserName = data.name;
        this.loggedInUserEmail = data.email;
        this.loggedInUserProfileAvatar = data.avatarName;
        
        
        })
        
        this.router.navigate(['schedule-pg']);
       }
      
      //  let user_id = localStorage.getItem('user_id');

       function setTheItem(userId){
         var value = 0;
         localStorage.setItem('user_id',userId);
         
         value = 1;
         
         return value;
       }   
      
    }
    else{
      this.errorMessage="Invalid Email or Password"
      
    }
        
    })
}

resetErrorMessage(){
  this.errorMessage="";
}

registerUser(name,email,password) {
  this.authService.signUp(name,email,password,'person.png');

}

takeMeHome(){
  sessionStorage.removeItem('display')
  this.router.navigate(['home'])
}

getDisplayDiv(display,value){
  for(var i=0;i<this.userSentMessage.length;i++){
     var index = i;
 
     this.userSentMessage.splice(index,1);
  
  }

  this.rateClicks = this.rateClicks+1;
  var clicks = this.rateClicks;
  if(clicks != 0 && clicks%2 !=0){
    sessionStorage.setItem('display',display)
  }
  else{
    sessionStorage.removeItem('display');
  }
  

}

getUserMessage(message){
  if(message != " "){

  // this.ScheduleSer.sendMail(this.loggedInUserName,this.loggedInUserEmail,message);
  // document.getElementById('messageBox').innerText="What";
  this.userSentMessage.unshift(message);
  console.log("Message.....");

}
}

updateAvatar(avatarName){
  this.userProfileAvatar = avatarName
}

displaySelectAvatarBlock(){
  this.ScheduleSer.getAvatar().subscribe((res:any)=>{
  //  console.log("Length"+res.length)

    for(var i=0;i<res.length;i++){
      // console.log("Avatar name: "+res[i].avatarName)
    this.avatarArr.push(res[i].avatarName)
        
    }
  })
  sessionStorage.setItem('display','avatarBlock');
}

updateUserInfo(newUserName){

  this.authService.updateUser(newUserName,this.userProfileAvatar).subscribe((res:any)=>{
    this.loggedInUserProfileAvatar = res.avatarName;
    this.loggedInUserName = res.name;
    // console.log("avatar..."+res.avatarName+" Name..."+res.name)
  })
  // this.loggedInUserProfileAvatar = this.userProfileAvatar;
  // this.loggedInUserName = newUserName;
}

toggleMobileSideBar(){
    sessionStorage.setItem('display','mobileSideBar');
    document.getElementById('mobile-sidebar').classList.toggle('active');
    document.getElementById('app-container').classList.toggle('hide-container');
 
}
navigateMobile(navigation){
if(navigation==1){
  // sessionStorage.removeItem('display');
  document.getElementById('mobile-sidebar').classList.remove('active')
  this.router.navigate(['get-schedule'])
}
else if(navigation == 2){
  // sessionStorage.removeItem('display');
  document.getElementById('mobile-sidebar').classList.remove('active')
  this.router.navigate(['set-schedule'])
}
else if(navigation == 3){
  // sessionStorage.removeItem('display');
  document.getElementById('mobile-sidebar').classList.remove('active')
  this.router.navigate(['get-accoplished'])
}
else if(navigation == 4){
  // sessionStorage.removeItem('display');
  document.getElementById('mobile-sidebar').classList.remove('active')
  this.router.navigate(['to-do'])
}
 
}

getNotification(){
  let timerId = setInterval(() => 
  { 
    const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate(); 
      let hour = date.getHours();
      let min = date.getMinutes();
      let secs = date.getSeconds();
      let toDay = date.getDay();
      
    alert('Today: '+toDay+' hour: '+hour+' min: '+min)
  }
    , 1000);
}


ngOnInit() {

  
  let userId = localStorage.getItem('user_id');
   if (userId == null){
    
      sessionStorage.setItem('display','signIn');
      this.router.navigate(['inschedule']);
   }else{
     let id = localStorage.getItem('user_id');
     console.log("User Id to get Profile*** "+id);
     this.authService.getTheProfile(id).subscribe((data:any)=>{
       // this.currentUser = data;
       this.loggedInUserName = data.name;
       this.loggedInUserEmail = data.email;
       this.loggedInUserProfileAvatar = data.avatarName;
       this.userProfileAvatar = data.avatarName;
       
       })
    }

    this.ScheduleSer.getAvatar().subscribe((res:any)=>{
      // console.log("Length"+res.length)
   
       for(var i=0;i<res.length;i++){
        //  console.log("Avatar name: "+res[i].avatarName)
       this.avatarArr.push(res[i].avatarName)
           
       }
     })

     //Getting the notifications
     let timerId = setInterval(() => 
  { 
    const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let dayDate = date.getDate(); 
      let hour = date.getHours();
      let min = date.getMinutes();
      let secs = date.getSeconds();
      let day = date.getDay();
      
    // alert('Today: '+toDay+' hour: '+hour+' min: '+min)
   
    var formartedHour;
    var formartedMin;
    if(hour < 10){
      formartedHour = "0"+hour;
    }
    else{
      formartedHour = hour;
    
    }

    if(min < 10){
      formartedMin = "0"+min;
    }
    else{
      formartedMin = min;
    }
    let currentTime = formartedHour+":"+formartedMin;
    // alert("currentTime "+currentTime)
    this.ScheduleSer.getNotifications(day,currentTime).subscribe((result:any)=>{
      for(var i=0;i<result.length;i++){
        if(result[i].notificationsResStatus == 1){
           alert("Activity "+result[i].eventName+" has Started");
         }
      }
    })
  }
    , 60000);

    console.log("user token"+localStorage.getItem('userToken'));
   }
  }
