import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import {SmartComplainceService} from "./services/smart-complaince.service"

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ClarityModule,
        ROUTING
    ],
    providers: [SmartComplainceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
