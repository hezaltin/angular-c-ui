import { Component, OnInit, Input, Output,EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  @Input() filteredUsersTerms;
  @Output() formUpdateEvent = new EventEmitter();
  @Input () formField;
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
      console.log(changes)
  }

  ngOnInit() {
    //console.log(this.filteredUsersTerms)
    //console.log(this.formField)
  }

  selectedId(selectId){
    this.formUpdateEvent.emit({select:selectId,fieldName:this.formField})
  }

}
