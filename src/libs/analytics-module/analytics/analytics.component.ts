
import { Component } from "@angular/core";
import { AssessmentData,ProductData} from './analytics.config'
import { Store } from "@ngrx/store";
import { AnalyticsStateReducer } from "../store";
import * as fromAnalytics from '../store';

import {barData,labelOption} from './analytics.config'

@Component({
    styleUrls: ['./analytics.component.scss'],
    templateUrl: './analytics.component.html',
})
export class AnalyticsComponent {
    productData:any;
    assessmentData:any

    constructor(private store :Store<AnalyticsStateReducer>){
        
    }

    ngOnInit(){
        this.productData = ProductData;
        this.assessmentData = AssessmentData;
      
        this.store.dispatch(new fromAnalytics.LoadProductDistribution());
    }

    generateSeriesForCountry(data){
        let generateReduce = data.reduce((all,item,index)=>{
                let name = {
                    name: item,
                    type: 'bar',
                    label: labelOption,
                    data:[]
                }

                all.push(name)

                return all;
        },[]);

        return generateReduce;

    }

    generateSeriesFordata(){
        let data = this.generateSeriesForCountry(barData[0].country);
                for(let item in barData){
                    for(let props in barData[item].country){
                        console.log(props)
                        data[props].data.push(barData[item].count[props])
                    }
                }
                console.log('data===>',data)
        return data;
                
    }



}

const name =  {
    name: 'Canada',
    type: 'bar',
    label: labelOption,
    data: [34, 13, 28, 27, 12]
}

