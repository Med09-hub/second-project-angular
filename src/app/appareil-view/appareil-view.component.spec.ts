import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilViewComponent } from './appareil-view.component';

describe('AppareilViewComponent', () => {
  let component: AppareilViewComponent;
  let fixture: ComponentFixture<AppareilViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppareilViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
