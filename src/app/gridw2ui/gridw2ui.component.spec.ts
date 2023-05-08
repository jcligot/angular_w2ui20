import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridw2uiComponent } from './gridw2ui.component';

describe('Gridw2uiComponent', () => {
  let component: Gridw2uiComponent;
  let fixture: ComponentFixture<Gridw2uiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gridw2uiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gridw2uiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
