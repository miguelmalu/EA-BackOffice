import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRatingsComponent } from './create-ratings.component';

describe('CreateRatingsComponent', () => {
  let component: CreateRatingsComponent;
  let fixture: ComponentFixture<CreateRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
