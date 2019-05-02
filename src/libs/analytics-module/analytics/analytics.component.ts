
import { Component } from "@angular/core";
import { AssessmentData,ProductData} from './analytics.config'

@Component({
    styleUrls: ['./analytics.component.scss'],
    templateUrl: './analytics.component.html',
})
export class AnalyticsComponent {
    productData:any;
    assessmentData:any

    ngOnInit(){
        this.productData = ProductData;
        this.assessmentData = AssessmentData
    }

}
