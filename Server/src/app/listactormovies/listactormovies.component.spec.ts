import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactormoviesComponent } from './listactormovies.component';

describe('ListactormoviesComponent', () => {
  let component: ListactormoviesComponent;
  let fixture: ComponentFixture<ListactormoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListactormoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListactormoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
