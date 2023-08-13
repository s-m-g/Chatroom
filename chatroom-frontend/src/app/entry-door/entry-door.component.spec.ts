import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDoorComponent } from './entry-door.component';

describe('EntryDoorComponent', () => {
  let component: EntryDoorComponent;
  let fixture: ComponentFixture<EntryDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
