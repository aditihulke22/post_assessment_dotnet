import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIpoComponent } from './new-ipo.component';

describe('NewIpoComponent', () => {
  let component: NewIpoComponent;
  let fixture: ComponentFixture<NewIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
