import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerContentAreaComponent } from './lower-content-area.component';

describe('LowerContentAreaComponent', () => {
  let component: LowerContentAreaComponent;
  let fixture: ComponentFixture<LowerContentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerContentAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
