import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ROUTING } from './app.routing';


import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
