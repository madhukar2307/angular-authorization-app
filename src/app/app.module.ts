import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from "./_services";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent
    ],
    providers: [ UserService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }