import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NodeVisualComponent } from './node-visual.component';

describe('NodeVisualComponent', () => {
  let component: NodeVisualComponent;
  let fixture: ComponentFixture<NodeVisualComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
