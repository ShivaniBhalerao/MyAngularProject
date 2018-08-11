import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import{routes} from './app.router';
import { AppComponent } from './app.component';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PythonComponent,
    JavaComponent,
    MicrosoftComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

