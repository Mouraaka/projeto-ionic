import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundaPagCompPage } from './segunda-pag-comp.page';

describe('SegundaPagCompPage', () => {
  let component: SegundaPagCompPage;
  let fixture: ComponentFixture<SegundaPagCompPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaPagCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
