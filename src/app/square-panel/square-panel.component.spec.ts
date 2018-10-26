import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePanelComponent } from './square-panel.component';

describe('SquarePanelComponent', () => {
  let component: SquarePanelComponent;
  let fixture: ComponentFixture<SquarePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquarePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
