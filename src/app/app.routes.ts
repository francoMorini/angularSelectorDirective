import { Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { JokeComponent } from "./pages/joke/joke.component";

export const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "dev", component: JokeComponent },
];
