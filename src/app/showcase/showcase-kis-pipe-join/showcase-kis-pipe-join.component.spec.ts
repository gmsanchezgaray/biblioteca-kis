/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowcaseKisPipeJoinComponent } from './showcase-kis-pipe-join.component';

describe('ShowcaseKisPipeJoinComponent', () => {
  let component: ShowcaseKisPipeJoinComponent;
  let fixture: ComponentFixture<ShowcaseKisPipeJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseKisPipeJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseKisPipeJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
