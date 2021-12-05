import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducrDetailsComponent } from './producr-details.component';

describe('ProducrDetailsComponent', () => {
  let component: ProducrDetailsComponent;
  let fixture: ComponentFixture<ProducrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducrDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
