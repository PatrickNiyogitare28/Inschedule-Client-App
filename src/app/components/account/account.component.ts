import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  logout() {
    this.authService.logout()

    
   }
  ngOnInit() {
  }

}
