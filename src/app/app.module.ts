import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {StoreRouterConnectingModule,RouterStateSerializer} from '@ngrx/router-store'; 
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import {StoreModule,MetaReducer} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
// import { HomeComponent } from "./home/home.component";
// import { AboutComponent } from "./about/about.component";
// import {SmartComplainceService} from "./services/smart-complaince.service";
// import { TechComplaintFlowComponent } from './tech-complaint-flow/tech-complaint-flow.component';
// import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { reducers,CustoumSerializer } from './store';


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        // ReactiveFormsModule,
        // HttpClientModule,
        ClarityModule,
        ROUTING,
        StoreRouterConnectingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [{provide:RouterStateSerializer, useClass:CustoumSerializer}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
