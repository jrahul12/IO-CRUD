import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdUiComponent } from './std-ui.component';

describe('StdUiComponent', () => {
  let component: StdUiComponent;
  let fixture: ComponentFixture<StdUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
