
import {Component,OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ScheduleService} from '../../shared/services/schedule.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '../../shared/auth.service';



/**
 * @title Drag&Drop connected sorting
 */
@Component({
    selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css','../responsive/todo-res/todo-res.component.css']
})
export class ToDoComponent implements OnInit{
  todo=[];
  doing = [];
  done = [];
  public rateClicks=0;
  // todo = [
  //   'Documenting',
  //   'Designing',
  //   'Coding',
  //   'Testing'
  // ];

  // done = [
  //   'Deploying',
  //   'Re desgning',
  //   'Re testing',
  //   'Marketing',
  //   'Celebrating'
  // ];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    for(var i=0;i<this.todo.length;i++){
      this.ScheduleService.updateToDo(this.todo[i],0,i+1);
   }
   
   for(var i=0;i<this.done.length;i++){
    this.ScheduleService.updateToDo(this.done[i],1,i+1);
 }

 for(var i=0;i<this.doing.length;i++){
  this.ScheduleService.updateToDo(this.doing[i],2,i+1);
}

  }

  constructor(public ScheduleService: ScheduleService,public MatSnackBar: MatSnackBar,public authService:AuthService){}

   updateToDo(){
     for(var i=0;i<this.todo.length;i++){
        this.ScheduleService.updateToDo(this.todo[i],0,i+1);
     }
     
     for(var i=0;i<this.done.length;i++){
      this.ScheduleService.updateToDo(this.done[i],1,i+1);
   }

   for(var i=0;i<this.doing.length;i++){
    this.ScheduleService.updateToDo(this.doing[i],2,i+1);
 }

   }

   removeTask(taskName,arrayIndex){
    //  console.log("Array Index...."+arrayIndex)
    this.ScheduleService.removeToDoTask(taskName).subscribe(res=>{
      if(arrayIndex==0){
        const index: number = this.todo.indexOf(taskName);
        if (index !== -1) {
            this.todo.splice(index, 1);
        }   
      }
      else if(arrayIndex==1){
        const index: number = this.done.indexOf(taskName);
        if (index !== -1) {
            this.done.splice(index, 1);
        }   
      }
      else if(arrayIndex==2){
        const index: number = this.doing.indexOf(taskName);
        if (index !== -1) {
            this.doing.splice(index, 1);
        }   
      }
        

        this.MatSnackBar.open(taskName,"Removed",{
          duration: 2000
        })
    })
   }

  ngOnInit(){
   this.ScheduleService.getToDo().subscribe((res:any)=>{
    for(var i=0;i<res.length;i++){
      if(res[i].status===0){
        this.todo.push(res[i].taskName);
      }
      
        if(res[i].status===1){
          this.done.push(res[i].taskName);
        }

        if(res[i].status===2){
          this.doing.push(res[i].taskName);
        }
    }
   })
  }

  displayAddToDoForm(){
   
   
   this.rateClicks = this.rateClicks+1;
   var clicks = this.rateClicks;
   if(clicks != 0 && clicks%2 !=0){
    //  sessionStorage.setItem('display','addToDo')
    document.getElementById('form-field').classList.toggle('form-field-active');
   }
   else{
    //  sessionStorage.removeItem('display');
    document.getElementById('form-field').classList.remove('form-field-active')
   }
   
  }

  addTodo(taskName,status,index){
    this.ScheduleService.addToDo(taskName,status,index).subscribe((res:any) =>{
      if(res.statusCode == 200){
      //  this.router.navigate(['to-do'])
      this.MatSnackBar.open(res.taskName,"added successfuly",{
        duration:2000
      })
      this.todo.push(res.taskName);
      sessionStorage.removeItem('display');
      }
      else if(res.taskName === "Task Name"){
       this.MatSnackBar.open("Use another","TaskName",{
         duration:2000
       })
      }
      else{
        this.MatSnackBar.open("Use another name",res.taskName+" was used!",{
          duration:2000
        })
      }
   })
    

  }
 
}
