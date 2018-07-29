import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMsportComplexComponent } from './abmsport-complex.component';

describe('ABMsportComplexComponent', () => {
  let component: ABMsportComplexComponent;
  let fixture: ComponentFixture<ABMsportComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABMsportComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABMsportComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
