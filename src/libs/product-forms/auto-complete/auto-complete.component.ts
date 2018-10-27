import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit, OnChanges {

  @Input() filteredUsersTerms;
  @Output() formUpdateEvent = new EventEmitter();
  @Input() formField;
  @Input() currentFocus;
  @ViewChild('list') list: ElementRef
  constructor(private elementref: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('changes====>', changes);
    if (changes.currentFocus) {
      this.setAutoListClass(changes.currentFocus['currentValue'])
    }
  }

  ngOnInit() {
    //console.log(this.filteredUsersTerms)
    //console.log(this.formField)
  }

  selectedId(selectId) {
    //console.log('selectId====>', selectId)
    this.formUpdateEvent.emit({ select: selectId, fieldName: this.formField })
  }


  setAutoListClass(data) {
    let nativeElement = this.list.nativeElement.children;
    //console.log(nativeElement)
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
