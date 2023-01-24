import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceClient2Component } from './interface-client2.component';

describe('InterfaceClient2Component', () => {
  let component: InterfaceClient2Component;
  let fixture: ComponentFixture<InterfaceClient2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceClient2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceClient2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
