import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LocationComponent } from './location/location.component';
import { GamesComponent } from './games/games.component';
import { PipesPipe } from './pipes/pipes.pipe';

const appRoutes: Routes = [
  {path:'', component:IndexComponent},
  {path: 'pokemon', component:PokemonComponent},
  {path: 'location', component:LocationComponent},
  {path: 'games', component:GamesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PokemonComponent,
    LocationComponent,
    GamesComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
