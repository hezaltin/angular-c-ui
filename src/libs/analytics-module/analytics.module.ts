import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import {AnalyticsComponent} from './analytics/analytics.component'
import {AssessmentTableComponent} from './assesment-table/assessment.table.component'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers/product-distribution.reducer';
import { effects } from './store';
import { AnalyticsService } from './services/analytics.service';
import { DataVisualizationModule } from 'libs/data-visualization-module/data-visualization.module';

export const ROUTES: Routes = [
  {
    path: '',
    component: AnalyticsComponent,
  },]

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('analytics',reducers),
    EffectsModule.forFeature(effects),
    DataVisualizationModule
  ],

  declarations: [
    AnalyticsComponent,
    AssessmentTableComponent

  ],
  providers:[AnalyticsService]
})
export class AnalyticsModule { }
