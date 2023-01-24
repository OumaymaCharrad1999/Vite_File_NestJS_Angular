import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFileComponent } from './ajouter-file.component';

describe('AjouterFileComponent', () => {
  let component: AjouterFileComponent;
  let fixture: ComponentFixture<AjouterFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
