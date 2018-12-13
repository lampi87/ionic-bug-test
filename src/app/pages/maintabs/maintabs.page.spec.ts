import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintabsPage } from './maintabs.page';

describe('MaintabsPage', () => {
  let component: MaintabsPage;
  let fixture: ComponentFixture<MaintabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
