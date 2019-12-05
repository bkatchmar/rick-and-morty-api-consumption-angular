import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersComponent } from "./characters/characters.component";
import { EpisodesComponent } from "./episodes/episodes.component";

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'episodes', component: EpisodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
