import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbisComponent } from './testbis.component';

describe('TestbisComponent', () => {
  let component: TestbisComponent;
  let fixture: ComponentFixture<TestbisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
