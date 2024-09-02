import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkerPage } from './marker.page';

describe('MarkerPage', () => {
  let component: MarkerPage;
  let fixture: ComponentFixture<MarkerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
