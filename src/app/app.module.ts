// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReflectionOneComponent } from './reflection-one/reflection-one.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppComponent,
    ReflectionOneComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }