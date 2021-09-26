import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppShopComponent } from './web-app-shop.component';

describe('WebAppShopComponent', () => {
  let component: WebAppShopComponent;
  let fixture: ComponentFixture<WebAppShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
