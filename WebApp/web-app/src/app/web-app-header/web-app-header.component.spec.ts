import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppHeaderComponent } from './web-app-header.component';

describe('WebAppHeaderComponent', () => {
  let component: WebAppHeaderComponent;
  let fixture: ComponentFixture<WebAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
