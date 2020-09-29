import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public router: Router) { }
   
  signIn(){
     sessionStorage.setItem('display','signIn');
     this.router.navigate(['inschedule']);
  }
  
ngOnInit() {
    sessionStorage.setItem('display','home-page');
  }
}
