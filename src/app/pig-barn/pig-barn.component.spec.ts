import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigBarnComponent } from './pig-barn.component';

describe('PigBarnComponent', () => {
  let component: PigBarnComponent;
  let fixture: ComponentFixture<PigBarnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigBarnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigBarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
