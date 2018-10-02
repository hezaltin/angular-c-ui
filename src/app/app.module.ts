import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import {StoreModule,MetaReducer} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import {SmartComplainceService} from "./services/smart-complaince.service";
import { TechComplaintFlowComponent } from './tech-complaint-flow/tech-complaint-flow.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { reducers, effects } from './store';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        TechComplaintFlowComponent,
        AutoCompleteComponent,
        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ClarityModule,
        ROUTING,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument()
    ],
    providers: [SmartComplainceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
