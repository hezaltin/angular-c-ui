import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class AnalyticsService {

  private baseUrl: string = environment.baseUrl
constructor(private http:HttpClient) { }



getAnalyticsOfBaraData(){

  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  let url =`${this.baseUrl}/api/productDistribution`
  return this.http.get(url,{headers});
  
}

}
