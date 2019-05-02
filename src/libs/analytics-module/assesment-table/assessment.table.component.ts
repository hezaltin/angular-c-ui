
import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
    selector: 'assessment-table',
    styleUrls: ['./assessment.table.component.scss'],
    templateUrl: './assessment.table.component.html',
})
export class AssessmentTableComponent {
    @Input() productData;
    @Input() assessmentData;
    getChanges:any;
    constructor(){

    }

    ngOnChanges(changes:SimpleChanges){
            console.log('changes====>',changes)

            if(changes.productData.currentValue && changes.assessmentData.currentValue){
              this.getChanges=  this.getAssessmentTable(changes.productData.currentValue,changes.assessmentData.currentValue)
            }
    }

    getAssessmentTable(product,assessment){
            console.log(product)
            console.log(assessment)

            let {
                bulkCode,
                country,
                uri,
                ...otherProps
            } = product;

            console.log('otherProps==>',otherProps)
            let getProductKeys = Object.keys(otherProps);
            return this.getObject(assessment,getProductKeys)
    }   

    getObject(assessment,getProductKeys){
        let reduceValue = getProductKeys.reduce((all,item,index)=>{
            if(!assessment[item]){
                let emptyList ={
                    productName : item, 
                    complaince:'-',
                    undetermined:'-'
                } 
                all.productsAssesments.push(emptyList)
                return all;
            }

            let filterValueComplaint = assessment[item].filter(item=>item.compliance==="compliant");
            let filterValueDeterminant = assessment[item].filter(item=>item.compliance==="undetermined");
            let generateList = {
                productName : item,
                complaince : filterValueComplaint.length > 0 ? filterValueComplaint.length : '-',
                undetermined: filterValueDeterminant.length > 0 ? filterValueDeterminant.length : '-'
            }
            all.productsAssesments.push(generateList)
            return all;
        },{productsAssesments:[]});
        return reduceValue
    }
}
