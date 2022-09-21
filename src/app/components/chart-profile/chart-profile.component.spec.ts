import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProfileComponent } from './chart-profile.component';

describe('ChartProfileComponent', () => {
  let component: ChartProfileComponent;
  let fixture: ComponentFixture<ChartProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
