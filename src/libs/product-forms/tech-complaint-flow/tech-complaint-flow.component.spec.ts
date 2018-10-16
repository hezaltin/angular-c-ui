import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComplaintFlowComponent } from './tech-complaint-flow.component';

describe('TechComplaintFlowComponent', () => {
  let component: TechComplaintFlowComponent;
  let fixture: ComponentFixture<TechComplaintFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechComplaintFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechComplaintFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
