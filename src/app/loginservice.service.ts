import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  userid:any
  flag:any
  Bank:any={}
  customertype:any;
  customer:any;
  constructor(private http:HttpClient,private router:Router) {
    this.userid=""
   }
   authenticate(url:any)
   {
    this.http.get(url)
    .subscribe((result:any)=>{
      if(result==null){
        this.flag=1;
      }
      else{
      this.flag=0;
        this.userid=result.customer.customerid;
        this.customer=result.customer;
        this.router.navigate(["/dashboard"]);
        
      }
    },
    err=>{
      console.log(err);
      this.router.navigate(["/login"]);
    })

  }
  getflag()
  {
    return this.flag;
  }

  getuserid()
  {
    return this.userid;
  }
  setBank(bank:any)
  {
    this.Bank=bank;

  }
  loggedin(){
    return this.userid;
  }
   }

