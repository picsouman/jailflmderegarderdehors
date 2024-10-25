import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetarTafComponent } from './metar-taf.component';

describe('MetarTafComponent', () => {
  let component: MetarTafComponent;
  let fixture: ComponentFixture<MetarTafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetarTafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetarTafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
