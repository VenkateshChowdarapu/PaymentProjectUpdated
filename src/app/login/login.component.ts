import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag:any
  url:any
  loginForm:FormGroup; 

  constructor(private http:HttpClient,private service:LoginserviceService,
    private router:Router ) {
    this.loginForm =new FormGroup({
      username: new FormControl('', [
  
        Validators.required,
        
      ]),
      password: new FormControl('', [
  
        Validators.required,
       
      ]),
      
    });
  this.url=""
  }


  ngOnInit(): void {
    console.log("login");
  }
  handleLogin() {
    this.url="http://localhost:8080/login?un="+this.username.value+"&pass="+this.password.value;
    this.service.authenticate(this.url);
    this.flag=this.service.getflag();
    
  }
  get username() {
    return this.loginForm.controls['username'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
  
}
