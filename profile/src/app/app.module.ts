import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';

import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(), 
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule
  ],
  providers: [AmplifyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
