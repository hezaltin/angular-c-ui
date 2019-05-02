import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { NodeService } from './home/home.component.service';
import { HttpClientModule } from '@angular/common/http';
import {TreeModule} from 'primeng/tree';
import { NgAisModule } from 'angular-instantsearch';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },]

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    TreeModule,
    RouterModule.forChild(ROUTES),
    NgAisModule
  ],
  declarations: [
    HomeComponent

  ],
  providers:[NodeService]
})
export class ClarityHomeModule { }
