import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmovieactorsComponent } from './listmovieactors.component';

describe('ListmovieactorsComponent', () => {
  let component: ListmovieactorsComponent;
  let fixture: ComponentFixture<ListmovieactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmovieactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmovieactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
