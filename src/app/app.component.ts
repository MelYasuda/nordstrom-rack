import { Component, OnInit } from '@angular/core';
import {Panel} from './models/panel.model';
import { Carousel } from './models/carousel.model';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit {
  title = '';

  user;
  public isLoggedIn: Boolean;
  public userName: String;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
     this.isLoggedIn = false;
     // this.router.navigate(['admin']);
   } else {
     this.isLoggedIn = true;
     this.userName = user.displayName;
     this.router.navigate([]);
   }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  public ngOnInit()
  {
    $(document).ready(function(){
      $(".search-button").click(function(){
        $("#search-bar").show();
        $("#bottom-navbar").hide();
      });

      $(".fas").click(function(){
        $("#search-bar").hide();
        $("#bottom-navbar").show();
      });
    });
  }

}
