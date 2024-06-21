import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeiraPagCompPage } from './primeira-pag-comp.page';

describe('PrimeiraPagCompPage', () => {
  let component: PrimeiraPagCompPage;
  let fixture: ComponentFixture<PrimeiraPagCompPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraPagCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
