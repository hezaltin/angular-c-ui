import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { mapTo, delay,map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { of } from 'rxjs';
import 'rxjs/add/observable/of';
import { Product } from '../about/about-class';
import { SubmitResponse } from '../about/smart-submit-response'
import { bulkCodeResponse,productBulkSearchResponse,responseRawmaterialsIngeridents } from '../about/bulk-code-response'

const smartSubmitResponse= Object.assign({},SubmitResponse)
const bulkResponse = Object.assign([],bulkCodeResponse)

@Injectable()
export class SmartComplainceService {

  constructor(private http:HttpClient) { }

  getSmartCompliance(product: Product){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let url ='http://esanalyticsdv.es.dupont.com:7070/assess';
   // return this.http.post(url,JSON.stringify(product),{ headers: headers });
   return Observable.of(smartSubmitResponse).pipe(delay(1000));
     
  }

  getSearchProduct(productValue){
    const res=Object.assign({},productBulkSearchResponse)
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // let url ='http://esanalyticsdv.es.dupont.com:7070/suggest/product?query='+productValue.name;
   // return this.http.get(url);
   return Observable.of(res).pipe(delay(0));
     
  }

  getSearchRawMaterials(searchValue){
    console.log(searchValue);
    const res=Object.assign({},responseRawmaterialsIngeridents);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
   // let url ='http://esanalyticsdv.es.dupont.com:7070/suggest/product?query='+productValue.name;
   // return this.http.get(url);
   return Observable.of(res).pipe(delay(0));
  }


  getProductDetails(productValue){
   const res=bulkResponse.filter((value)=>value.bulkCode===productValue.name);
   let bulkResponeData=res.length>0?res[0]:[];
    let url ='http://esanalyticsdv.es.dupont.com:7070/product/'+productValue.name +'/'+ productValue.internalProductName;
  //  return this.http.get(url);
   return Observable.of(bulkResponeData).pipe(delay(0));  
  }


  
  getToggleButton(productValue){
      const productData = {
          name:`getResponse for the data is ${productValue}`
      }
     let url ='http://esanalyticsdv.es.dupont.com:7070/product/'+productValue.name +'/'+ productValue.internalProductName;
   //  return this.http.get(url);
    return Observable.of(productData).pipe(delay(0));  
   }

}
