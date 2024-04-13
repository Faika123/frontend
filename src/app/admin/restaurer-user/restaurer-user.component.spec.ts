import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurerUserComponent } from './restaurer-user.component';

describe('RestaurerUserComponent', () => {
  let component: RestaurerUserComponent;
  let fixture: ComponentFixture<RestaurerUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurerUserComponent]
    });
    fixture = TestBed.createComponent(RestaurerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
