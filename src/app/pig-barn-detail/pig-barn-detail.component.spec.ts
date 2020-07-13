import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigBarnDetailComponent } from './pig-barn-detail.component';

describe('PigBarnDetailComponent', () => {
  let component: PigBarnDetailComponent;
  let fixture: ComponentFixture<PigBarnDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigBarnDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigBarnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
