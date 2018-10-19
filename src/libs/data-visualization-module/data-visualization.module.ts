import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import {DataVisualizationComponent} from './data-visualization/data-visualization.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: DataVisualizationComponent,
  },]

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    DataVisualizationComponent

  ]
})
export class DataVisualizationModule { }
