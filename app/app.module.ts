import "./rxjs-extensions";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { StoreComponent } from "./store.component";
import { OrderComponent } from "./order.component";
import { WidgetDataService } from "./widget.dataservice";
import { OrderDataService } from "./order.dataservice";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StoreComponent,
    OrderComponent,
  ],
  providers: [ WidgetDataService, OrderDataService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
