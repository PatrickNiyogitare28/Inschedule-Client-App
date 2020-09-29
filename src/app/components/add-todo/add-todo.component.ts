import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../../shared/services/schedule.service';
import {ActivatedRoute, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(public ScheduleSer: ScheduleService,public router:Router,
    public MatSnackBar: MatSnackBar) { }

   addTodo(taskName,status,index){
     this.ScheduleSer.addToDo(taskName,status,index).subscribe((res:any) =>{
       if(res.statusCode == 200){
        this.router.navigate(['to-do'])
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

   

  ngOnInit() {
  }

}
