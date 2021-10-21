import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-customer-page',
  templateUrl: './delete-customer-page.component.html',
  styleUrls: ['./delete-customer-page.component.scss']
})
export class DeleteCustomerPageComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute) { }

  customerId:string|null="";

  ngOnInit(): void {
    //this.customerId=this._activatedRoute.snapshot.paramMap.get('id') //dynamically not update
    this._activatedRoute.paramMap.subscribe(responce=>{
        this.customerId=responce.get('id')
    },error => {
      alert(error)
    })
  }

}
