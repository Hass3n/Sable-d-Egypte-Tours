import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssantialComponent } from './essantial.component';

describe('EssantialComponent', () => {
  let component: EssantialComponent;
  let fixture: ComponentFixture<EssantialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssantialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EssantialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
