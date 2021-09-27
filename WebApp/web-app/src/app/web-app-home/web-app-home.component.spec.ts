import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppHomeComponent } from './web-app-home.component';

describe('WebAppHomeComponent', () => {
  let component: WebAppHomeComponent;
  let fixture: ComponentFixture<WebAppHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
