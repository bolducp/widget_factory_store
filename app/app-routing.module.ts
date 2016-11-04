import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreComponent } from "./store.component";
import { OrderComponent } from "./order.component";

const routes: Routes = [
  { path: "", redirectTo: "/store", pathMatch: "full" },
  { path: "store", component: StoreComponent },
  { path: "orders/:id",  component: OrderComponent },
  { path: "orders",  component: OrderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
