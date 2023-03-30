import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperContentAreaComponent } from './upper-content-area.component';

describe('UpperContentAreaComponent', () => {
  let component: UpperContentAreaComponent;
  let fixture: ComponentFixture<UpperContentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperContentAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
