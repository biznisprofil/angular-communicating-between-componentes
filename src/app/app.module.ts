import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { MessageResolver } from './_services/message.resolver';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent],
  providers: [MessageResolver]
})
export class AppModule { }
