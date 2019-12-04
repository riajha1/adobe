import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class IntermediateService {
  public cartList: Array<any>;
  constructor() {
    this.cartList = [];
  }

  setCartList(item) {
    const itemExists = this.cartList.findIndex(buck => buck.ID === item.ID) ;
    if (itemExists > -1) {
      this.cartList.splice(itemExists, 1);
    } else {
      this.cartList.push(item);
    }
    console.log(this.cartList);
  }

  fetchCartList(): any {
    return this.cartList;
    // console.log(this.cartList);
  }
}


