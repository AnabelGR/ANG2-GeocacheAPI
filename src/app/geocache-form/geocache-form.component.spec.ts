import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacheFormComponent } from './geocache-form.component';

describe('GeocacheFormComponent', () => {
  let component: GeocacheFormComponent;
  let fixture: ComponentFixture<GeocacheFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacheFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
