import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinkVisualComponent } from './link-visual.component';

describe('LinkVisualComponent', () => {
  let component: LinkVisualComponent;
  let fixture: ComponentFixture<LinkVisualComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
