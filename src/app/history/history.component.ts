import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
transactions:any
  constructor(private http:HttpClient,private service:LoginserviceService) { 
    this.transactions=[]
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/transaction/"+this.service.userid)
    .subscribe(result=>{
      this.transactions=result;
      console.log(result)
    })
  }
  

}
