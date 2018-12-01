import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MapComponent } from "./transformation/map/map.component";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatListModule, MatExpansionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
