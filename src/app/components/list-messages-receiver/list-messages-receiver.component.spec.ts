import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessagesReceiverComponent } from './list-messages-receiver.component';

describe('ListMessagesReceiverComponent', () => {
  let component: ListMessagesReceiverComponent;
  let fixture: ComponentFixture<ListMessagesReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessagesReceiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessagesReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
