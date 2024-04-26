import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarCategorieComponent } from './siderbar-categorie.component';

describe('SiderbarCategorieComponent', () => {
  let component: SiderbarCategorieComponent;
  let fixture: ComponentFixture<SiderbarCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiderbarCategorieComponent]
    });
    fixture = TestBed.createComponent(SiderbarCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
