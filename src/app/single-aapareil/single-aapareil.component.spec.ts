import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAapareilComponent } from './single-aapareil.component';

describe('SingleAapareilComponent', () => {
  let component: SingleAapareilComponent;
  let fixture: ComponentFixture<SingleAapareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleAapareilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAapareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
