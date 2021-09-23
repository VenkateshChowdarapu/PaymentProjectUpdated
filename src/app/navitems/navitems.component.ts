import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent {
  
  //navitems: Array<any>
  userid:any
   constructor(private service:LoginserviceService,private router:Router) {
    
  //   this.navitems = [{
  //     text: "Home",
  //     link: "home"
  //   },
  //   {
  //     text: "Login",
  //     link: "login"
  //   },
  //   {
  //   text:"Transaction",
  //   link:"transaction"
  //   },
  //   {
  //     text:"History",
  //     link:"history"
  //     },
    
  //   {
  //     text:"Dashboard",
  //     link:"dashboard"
  //     }
  // ]
  //};



}
loggedin()
{
  this.userid=this.service.userid;
  return this.userid;
}
logout()
{
  this.service.userid=""
  this.router.navigate(["/login"])
}
}
