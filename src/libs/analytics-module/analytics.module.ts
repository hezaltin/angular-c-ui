import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import {AnalyticsComponent} from './analytics/analytics.component'
import {AssessmentTableComponent} from './assesment-table/assessment.table.component'

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
  ],
  declarations: [
    AnalyticsComponent,
    AssessmentTableComponent

  ]
})
export class AnalyticsModule { }
