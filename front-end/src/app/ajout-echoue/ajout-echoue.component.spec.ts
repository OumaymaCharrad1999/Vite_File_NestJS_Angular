import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEchoueComponent } from './ajout-echoue.component';

describe('AjoutEchoueComponent', () => {
  let component: AjoutEchoueComponent;
  let fixture: ComponentFixture<AjoutEchoueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEchoueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEchoueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
