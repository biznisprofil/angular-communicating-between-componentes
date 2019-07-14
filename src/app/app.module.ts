import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
