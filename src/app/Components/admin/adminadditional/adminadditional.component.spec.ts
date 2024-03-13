import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadditionalComponent } from './adminadditional.component';

describe('AdminadditionalComponent', () => {
  let component: AdminadditionalComponent;
  let fixture: ComponentFixture<AdminadditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminadditionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminadditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
