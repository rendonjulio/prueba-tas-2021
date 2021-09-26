import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppFooterComponent } from './web-app-footer.component';

describe('WebAppFooterComponent', () => {
  let component: WebAppFooterComponent;
  let fixture: ComponentFixture<WebAppFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
