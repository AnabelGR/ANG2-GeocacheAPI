import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacheListComponent } from './geocache-list.component';

describe('GeocacheListComponent', () => {
  let component: GeocacheListComponent;
  let fixture: ComponentFixture<GeocacheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
