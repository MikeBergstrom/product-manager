import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReateComponent } from './reate.component';

describe('ReateComponent', () => {
  let component: ReateComponent;
  let fixture: ComponentFixture<ReateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
