import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
