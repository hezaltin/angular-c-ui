import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {StoreRouterConnectingModule,RouterStateSerializer} from '@ngrx/router-store'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import {StoreModule,MetaReducer} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { NgAisModule } from 'angular-instantsearch';
// import { HomeComponent } from "./home/home.component";
// import { AboutComponent } from "./about/about.component";
// import {SmartComplainceService} from "./services/smart-complaince.service";
// import { TechComplaintFlowComponent } from './tech-complaint-flow/tech-complaint-flow.component';
// import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { reducers,CustoumSerializer,effects } from './store';
import { LoginComponent } from "./auth/login/login.component";
import { AuthService } from "./services/auth.service";
import { AuthguardGuard } from "./guard/authguard.guard";
import {LogLevel} from "msal";
import {MsalModule, MsalInterceptor} from "@azure/msal-angular";
//import { httpInterceptorProviders } from "./http-interceptors";

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log("client logging" + message);
  }
export const protectedResourceMap:[string, string[]][]=[['https://graph.microsoft.com/v1.0/me', ['user.read']] ];


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        // ReactiveFormsModule,
         HttpClientModule,
        ClarityModule,
        ROUTING,
        NgAisModule,
        StoreRouterConnectingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument(),
        MsalModule.forRoot({
            clientID: '6226576d-37e9-49eb-b201-ec1eeb0029b6',
            authority: "https://login.microsoftonline.com/common/",
            validateAuthority: true,
            redirectUri: "http://localhost:4201/",
            cacheLocation : "localStorage",
            postLogoutRedirectUri: "http://localhost:4201/",
            navigateToLoginRequestUrl: true,
            popUp: false,
            consentScopes: [ "user.read"],
            unprotectedResources: ["https://www.microsoft.com/en-us/"],
            protectedResourceMap: protectedResourceMap,
            logger: loggerCallback,
            correlationId: '1234',
            level: LogLevel.Info,
            piiLoggingEnabled: true
          }
        ),
    ],
    providers: [
      {provide:RouterStateSerializer, useClass:CustoumSerializer},
      AuthService,
      AuthguardGuard,
      // {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true},
     // httpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
