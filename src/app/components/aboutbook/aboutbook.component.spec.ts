import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbookComponent } from './aboutbook.component';

describe('AboutbookComponent', () => {
  let component: AboutbookComponent;
  let fixture: ComponentFixture<AboutbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutbookComponent]
    });
    fixture = TestBed.createComponent(AboutbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
