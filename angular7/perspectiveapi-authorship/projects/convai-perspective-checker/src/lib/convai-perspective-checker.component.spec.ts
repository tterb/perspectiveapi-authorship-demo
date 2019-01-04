import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvaiPerspectiveCheckerComponent } from './convai-perspective-checker.component';

describe('ConvaiPerspectiveCheckerComponent', () => {
  let component: ConvaiPerspectiveCheckerComponent;
  let fixture: ComponentFixture<ConvaiPerspectiveCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvaiPerspectiveCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvaiPerspectiveCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
