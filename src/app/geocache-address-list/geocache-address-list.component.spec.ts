import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacheAddressListComponent } from './geocache-address-list.component';

describe('GeocacheAddressListComponent', () => {
  let component: GeocacheAddressListComponent;
  let fixture: ComponentFixture<GeocacheAddressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacheAddressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
