import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {filterComponent} from './components/filter/filter.component';
import {DropdownComponentSharedUi} from './components/dropdown-shared-ui/dropdown-shared-ui.component';
import {DataVisualizationSharedUiService} from './services/shared-ui.service';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { reducers,effects } from './store';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// export const ROUTES: Routes = [
//   {
//     path: '',
//     component: filterComponent,
//   },]

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    //RouterModule.forChild(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('sharedui',reducers),
    EffectsModule.forFeature(effects),
    //InfiniteScrollModule
  ],
  declarations: [
    filterComponent,
    DropdownComponentSharedUi,
    

  ],
  exports:[
    filterComponent
  ],
  providers:[DataVisualizationSharedUiService]
})
export class SharedUiModule { }
