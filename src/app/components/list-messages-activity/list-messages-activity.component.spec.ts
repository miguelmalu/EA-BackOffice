import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessagesActivityComponent } from './list-messages-activity.component';

describe('ListMessagesActivityComponent', () => {
  let component: ListMessagesActivityComponent;
  let fixture: ComponentFixture<ListMessagesActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessagesActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessagesActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
