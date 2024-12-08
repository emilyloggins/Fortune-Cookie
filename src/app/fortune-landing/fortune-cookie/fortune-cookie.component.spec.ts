import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneCookieComponent } from './fortune-cookie.component';

describe('FortuneCookieComponent', () => {
  let component: FortuneCookieComponent;
  let fixture: ComponentFixture<FortuneCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortuneCookieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortuneCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
