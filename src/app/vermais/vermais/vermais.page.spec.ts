import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VermaisPage } from './vermais.page';

describe('VermaisPage', () => {
  let component: VermaisPage;
  let fixture: ComponentFixture<VermaisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VermaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
