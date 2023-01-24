import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectGuichetComponent } from './connect-guichet.component';

describe('ConnectGuichetComponent', () => {
  let component: ConnectGuichetComponent;
  let fixture: ComponentFixture<ConnectGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectGuichetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
