import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../../shared/services/schedule.service'
import { HttpClient } from '@angular/common/http';
import { Router , ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-accoplishmodel',
  templateUrl: './accoplishmodel.component.html',
  styleUrls: ['./accoplishmodel.component.css']
})
export class AccoplishmodelComponent implements OnInit {

  constructor(private scheduleSer: ScheduleService,private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
  }

}
