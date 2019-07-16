import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/index";
import { AboutComponent } from "./about/about.component";
import { MessageResolver } from './_services/message.resolver';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent, resolve: { MessageResolver } },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
