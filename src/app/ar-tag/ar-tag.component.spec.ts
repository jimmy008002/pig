import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArTagComponent } from './ar-tag.component';

describe('ArTagComponent', () => {
  let component: ArTagComponent;
  let fixture: ComponentFixture<ArTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
