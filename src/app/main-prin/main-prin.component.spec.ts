import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPrinComponent } from './main-prin.component';

describe('MainPrinComponent', () => {
  let component: MainPrinComponent;
  let fixture: ComponentFixture<MainPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
