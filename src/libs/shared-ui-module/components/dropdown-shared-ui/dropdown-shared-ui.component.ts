import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: "app-data-dropdown-shared-ui",
    styleUrls: ["./dropdown-shared-ui.component.scss"],
    templateUrl: "./dropdown-shared-ui.component.html"
})

export class DropdownComponentSharedUi {
    @Input() filteredUsersTerms;
    @Output() formUpdateEvent = new EventEmitter();
    @Input() formField;
    @Input() currentFocus;
    @ViewChild('list') list: ElementRef
    public getVisualData$: any;
    public getVisualData: any[];
    public products: any;
    
    constructor(private elementref: ElementRef, private renderer: Renderer2) {}

    ngOnChanges(changes:SimpleChanges){
      if (changes.currentFocus) {
          this.setAutoListClass(changes.currentFocus['currentValue'])
      }
    }

    ngOnInit() {
        console.log("onInitEntry");  
    }

    selectedId(selectId) {
      console.log(this.formField)
      this.formUpdateEvent.emit({ select: selectId, fieldName: this.formField })
    }
        
    setAutoListClass(data) {
      let nativeElement = this.list.nativeElement.children;
      if (!nativeElement.length) return;
      this.removeAutoListClass(nativeElement);
      this.renderer.addClass(nativeElement[data.count], 'autocomplete-active')
    }
    
    removeAutoListClass(nativeCollections) {
      for (let i = 0; i < nativeCollections.length; i++) {
        this.renderer.removeClass(nativeCollections[i], 'autocomplete-active');
      }
    }    
}
