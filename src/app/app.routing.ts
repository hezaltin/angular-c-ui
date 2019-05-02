/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { MsalGuard } from '@azure/msal-angular';

// import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component : LoginComponent},
    {path: 'home', loadChildren:'../libs/home-module/home.module#ClarityHomeModule',canActivate : [MsalGuard]},
    {path: 'product', loadChildren:'../libs/product-forms/product.module#ProductModule',canActivate:[MsalGuard]},
    {path: 'datavisualization', loadChildren:'../libs/data-visualization-module/data-visualization.module#DataVisualizationModule',canActivate:[MsalGuard]},
    {path: 'analytics', loadChildren:'../libs/analytics-module/analytics.module#AnalyticsModule',canActivate:[MsalGuard]}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
