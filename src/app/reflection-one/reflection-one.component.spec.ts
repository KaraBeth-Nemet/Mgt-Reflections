import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionOneComponent } from './reflection-one.component';

describe('ReflectionOneComponent', () => {
  let component: ReflectionOneComponent;
  let fixture: ComponentFixture<ReflectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectionOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReflectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
