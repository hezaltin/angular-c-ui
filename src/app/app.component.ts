import { Component,ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isCollapsed:boolean =false;
    constructor(private router: Router,private elementRef:ElementRef) {
    }

    collapsiable(){
        this.isCollapsed = !this.isCollapsed
        console.log(this.elementRef.nativeElement)
    }
}
