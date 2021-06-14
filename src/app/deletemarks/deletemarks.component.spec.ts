import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemarksComponent } from './deletemarks.component';

describe('DeletemarksComponent', () => {
  let component: DeletemarksComponent;
  let fixture: ComponentFixture<DeletemarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
