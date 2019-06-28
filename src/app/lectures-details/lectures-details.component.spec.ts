import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturesDetailsComponent } from './lectures-details.component';

describe('LecturesDetailsComponent', () => {
  let component: LecturesDetailsComponent;
  let fixture: ComponentFixture<LecturesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
