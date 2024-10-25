import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemsiComponent } from './temsi.component';

describe('TemsiComponent', () => {
  let component: TemsiComponent;
  let fixture: ComponentFixture<TemsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemsiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
