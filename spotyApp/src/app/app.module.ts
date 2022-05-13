import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { SharedComponent } from './components/shared/shared.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomsdeguroPipe } from './pipes/domsdeguro.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    SharedComponent,
    TarjetasComponent,
    NavbarComponent,
    LoadingComponent,
    NoimagePipe,
    DomsdeguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
