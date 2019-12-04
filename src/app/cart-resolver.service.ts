import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { IntermediateService } from "./intermediate.service";

@Injectable({
  providedIn: "root"
})
export class CartResolverService implements Resolve<any> {
  constructor(private intermediateservice: IntermediateService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.intermediateservice.fetchCartList();
  }
}
