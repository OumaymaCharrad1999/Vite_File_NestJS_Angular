import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthetifieComponent } from './non-authetifie.component';

describe('NonAuthetifieComponent', () => {
  let component: NonAuthetifieComponent;
  let fixture: ComponentFixture<NonAuthetifieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAuthetifieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonAuthetifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
