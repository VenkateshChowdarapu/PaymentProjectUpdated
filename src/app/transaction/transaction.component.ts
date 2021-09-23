import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: any;
  messagetypes:any;
  flag:any=true;
  customertype:any;
  transfertypes:any;
  constructor(private service:LoginserviceService,private http:HttpClient,
    private router:Router, private toastr:ToastrService
    ) { 
    // this.transaction={
    //   // transactionid:"",
    //   // customerid:this.service.getuserid(),
    //   // senderbic: this.service.Bank.bic,
    //   // receiverid:"",
    //   // receivername:"",
    //   // receiverbic:"" , 
    //   // receiverbankname:"", 
    //   // transfertypecode:"",
    //   // currencyamount:0,
    //   // transferfees:0,
    //   // messagetype:""
      
    // }
    this.transaction={
      "transactionid": 0,
      "customer": this.service.customer,
      
      "currency": {
        "currencycode": "INR",
        "currencyname": "Indian Rupees",
        "conversionrate": 1
      },
      "senderBIC": this.service.Bank,
      "receiverBIC": {
        "bankname": "",
        "bic": ""
      },
      "receiveraccountholdernumber": "",
      "receiveraccountholdername": "",
      "transfertypecode": {
        "transfertypecode": "",
        "transfertypedescription": ""
      },
      "message": {
        "messagecode": "REPA",
        "instruction": "REPA"
      },
      "currencyamount": 1,
      "inramount": 0,
      "transferfees": 0
      
    }
    
        this.http.get("http://localhost:8080/message")
        .subscribe((result:any)=>{
          this.messagetypes = result.map((item: any) => {
          return { name: item.instruction, code: item.messagecode };
        });

         console.log(result)
        },
        err=>{
          console.log(err);
          
        })
    
      }
  
  


  ngOnInit(): void {
    this.customertype=this.service.customertype;
    
  }
  transfer()
  {
      this.transaction.transferfees=this.transaction.inramount*0.0025
      //this.transaction.message.instruction=this.messagetypes.
      if(this.customertype=='B'){
      this.transaction.transfertypecode.transfertypedescription="Bank Transfer";
      this.transaction.transfertypecode.transfertypecode="B";
      }
      else{
      this.transaction.transfertypecode.transfertypedescription="Customer Transfer";
      this.transaction.transfertypecode.transfertypecode="C"

  }

  this.http.post("http://localhost:8080/transaction",this.transaction)
  .subscribe((result:any)=>{
    console.log(result);
   if(result.status==200)
   {
    //  alert("Transaction Successful")
    this.toastr.success('Transaction Successful','Success');
     this.router.navigate(["/dashboard"]);
   }
   else if(result.status==404){
     this.toastr.error("Invalid Transaction due to Insufficient fund in your account ","Error");
      // alert("Invalid Transaction due to Insufficient fund in your account");
   }
  },
  err=>{
    console.log(err)
  }
  )
}

  fetch()
  {
    let num="";
    num=this.transaction.receiveraccountholdernumber;
    
    
    this.http.get("http://localhost:8080/customer/"+num)
    .subscribe((result:any)=>{
      this.transaction.receiverBIC = result.bic;
      this.transaction.receiveraccountholdername = result.accountholdername;
      this.transaction.receiverbankname=result.bic.bankname;
     console.log(result);
     
     this.flag=true
    },
    err=>{
      console.log(err);
      this.transaction.receiverBIC.bic = "";
      this.transaction.receiveraccountholdername = "";
      this.transaction.receiverBIC.bankname="";
      this.flag=false
      
    })
    console.log(this.transaction.receiveraccountholdernumber);



  }
 

}
