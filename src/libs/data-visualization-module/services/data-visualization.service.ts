import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { mapTo, delay,map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { of } from 'rxjs';
import 'rxjs/add/observable/of';
import { DataVisualizationSearchResponse,DataVisualizationDefaultResponse } from '../config/data-visualization.config'


@Injectable()
export class DataVisualizationService {

  constructor(private http:HttpClient) { }

  getSearchDataVisualization(productValue){
    const res=Object.assign({},DataVisualizationSearchResponse)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // let url ='http://esanalyticsdv.es.dupont.com:7070/suggest/product?query='+productValue.name;
   // return this.http.get(url);
   return Observable.of(res).pipe(delay(0));
     
  }

  getDefaultDataVisualization(){
    const res=Object.assign({},DataVisualizationDefaultResponse)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // let url ='http://esanalyticsdv.es.dupont.com:7070/suggest/product?query='+productValue.name;
   // return this.http.get(url);
   return Observable.of(res).pipe(delay(0));
  }


}
