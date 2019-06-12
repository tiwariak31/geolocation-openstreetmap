import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeSelect2Component } from './custom-select2.component';

describe('CustomeSelect2Component', () => {
  let component: CustomeSelect2Component;
  let fixture: ComponentFixture<CustomeSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
