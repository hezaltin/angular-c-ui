import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },]

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    HomeComponent

  ]
})
export class ClarityHomeModule { }
