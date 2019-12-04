import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartListComponent } from "./cart-list/cart-list.component";
import { LandingComponent } from "./landing/landing.component";
import { CartResolverService } from './cart-resolver.service';

const routes: Routes = [
  { path: "", component: LandingComponent },
  {
    path: "cart",
    component: CartListComponent,
    resolve: {
      cartrlv: CartResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
