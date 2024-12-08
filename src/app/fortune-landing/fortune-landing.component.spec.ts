import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneLandingComponent } from './fortune-landing.component';

describe('FortuneCookieComponent', () => {
  let component: FortuneLandingComponent;
  let fixture: ComponentFixture<FortuneLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortuneLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortuneLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
