import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceGuichetComponent } from './interface-guichet.component';

describe('InterfaceGuichetComponent', () => {
  let component: InterfaceGuichetComponent;
  let fixture: ComponentFixture<InterfaceGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceGuichetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
