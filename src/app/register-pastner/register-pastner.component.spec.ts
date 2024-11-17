import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPastnerComponent } from './register-pastner.component';

describe('RegisterPastnerComponent', () => {
  let component: RegisterPastnerComponent;
  let fixture: ComponentFixture<RegisterPastnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPastnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPastnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
