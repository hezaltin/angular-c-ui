import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { mapTo, delay,map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { of } from 'rxjs';
import 'rxjs/add/observable/of';
import { DataVisualizationSearchResponse,DataVisualizationDefaultResponse } from '../config/shared-ui.config'


@Injectable()
export class DataVisualizationSharedUiService {

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

  getSearchFieldValues(productValue){
    const res=Object.assign({},DataVisualizationDefaultResponse)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // let url ='http://esanalyticsdv.es.dupont.com:7070/suggest/product?query='+productValue.name;
   // return this.http.get(url);
   console.log(res.terms)
    return Observable.of(res.terms).pipe(delay(0));
  }

  searchApplyFilter(req){
    const res=Object.assign({},DataVisualizationSearchResponse)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // let url ='http://esanalyticsdv.es.dupont.com:7070/suggest/product?query='+productValue.name;
   // return this.http.get(url);
   console.log(res.terms)
    return Observable.of(res.terms).pipe(delay(0));
  }

  filterSearchDetails(payload){
    console.log('payload-filterSearchDetails===>',payload)
    const res=Object.assign({},DataVisualizationSearchResponse)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url =`http://esanalyticsdv.es.dupont.com:7070/suggest/${payload.urlParams}?query=${payload.name}`;
    console.log(url);
   // return this.http.get(url);
   console.log(res.terms)
    return Observable.of(res.terms).pipe(delay(0));
  }


}
