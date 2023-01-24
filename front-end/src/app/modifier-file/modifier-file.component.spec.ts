import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFileComponent } from './modifier-file.component';

describe('ModifierFileComponent', () => {
  let component: ModifierFileComponent;
  let fixture: ComponentFixture<ModifierFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
