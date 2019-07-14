import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/index";
import { AboutComponent } from "./about/about.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
