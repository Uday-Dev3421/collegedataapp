import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFilterComponent } from './student-filter.component';

describe('StudentFilterComponent', () => {
  let component: StudentFilterComponent;
  let fixture: ComponentFixture<StudentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
