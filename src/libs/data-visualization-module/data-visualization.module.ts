import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {DataVisualizationComponent} from './data-visualization/data-visualization.component';
import {VisualizationDropdownComponent} from './visualization-dropdown-component/visualization-dropdown.component'
import {DataVisualizationService} from './services/data-visualization.service';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { reducers,effects } from './store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('visuals',reducers),
    EffectsModule.forFeature(effects),
    InfiniteScrollModule
  ],
  declarations: [
    DataVisualizationComponent,
    VisualizationDropdownComponent,
    

  ],
  providers:[DataVisualizationService]
})
export class DataVisualizationModule { }
