import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WintemComponent } from './wintem.component';

describe('WintemComponent', () => {
  let component: WintemComponent;
  let fixture: ComponentFixture<WintemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WintemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WintemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
