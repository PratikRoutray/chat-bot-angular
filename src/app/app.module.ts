import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { app_routing } from './app.route.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, app_routing.routes,HttpModule ],
  declarations: [ AppComponent, app_routing.components ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }