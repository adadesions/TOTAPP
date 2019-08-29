import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NattaPage } from './natta.page';

describe('NattaPage', () => {
  let component: NattaPage;
  let fixture: ComponentFixture<NattaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NattaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NattaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
