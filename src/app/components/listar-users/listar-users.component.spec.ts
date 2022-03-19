import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsersComponent } from './listar-users.component';

describe('ListarUsersComponent', () => {
  let component: ListarUsersComponent;
  let fixture: ComponentFixture<ListarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
