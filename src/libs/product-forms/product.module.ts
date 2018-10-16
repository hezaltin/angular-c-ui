import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { AboutComponent } from "./about/about.component";
import {SmartComplainceService} from "./services/smart-complaince.service";
import { TechComplaintFlowComponent } from './tech-complaint-flow/tech-complaint-flow.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { reducers,effects } from './store';

export const ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
  },]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ClarityModule,
        RouterModule.forChild(ROUTES),
        StoreModule.forFeature('products',reducers),
        EffectsModule.forFeature(effects)
  ],
  declarations: [ 
    AboutComponent,
    TechComplaintFlowComponent,
    AutoCompleteComponent,
  ],
  providers: [SmartComplainceService],
})
export class ProductModule { }
