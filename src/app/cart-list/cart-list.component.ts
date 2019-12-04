import { Component, OnInit } from "@angular/core";
import { IntermediateService } from "../intermediate.service";
import { ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"]
})
export class CartListComponent implements OnInit {
  public cartItems: Array<any>;

  constructor(
    private intermediateservice: IntermediateService,
    public actRout: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.cartItems = this.intermediateservice.fetchCartList();
    this.actRout.data.subscribe(resolveData => {
      if(!(resolveData.cartrlv && resolveData.cartrlv.length > 0)) {
        alert ('No data')
      } else  {
        this.cartItems = resolveData.cartrlv;
      }
    })
  }
}
