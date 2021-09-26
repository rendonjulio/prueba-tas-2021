import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppCartComponent } from './web-app-cart.component';

describe('WebAppCartComponent', () => {
  let component: WebAppCartComponent;
  let fixture: ComponentFixture<WebAppCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
