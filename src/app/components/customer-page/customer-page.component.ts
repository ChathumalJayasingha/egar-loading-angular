import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {
  selectedId: any;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  loadPage(link: string) {
    if (link==='delete'){
      this._router.navigate(['/customer/'+link,this.selectedId]).then()
      return;
    }
    this._router.navigate(['/customer/'+link])

  }
}
