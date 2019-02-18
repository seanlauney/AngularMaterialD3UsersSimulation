import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ForceDirectedGraph } from '../models/force-directed-graph';
import { Node } from '../models/node';
import { D3Service } from '../d3.service';


@Directive({
  selector: '[clickableNode]'
})
export class ClickableDirective implements OnInit {
  @Input('clickableNode') clickableNode: Node;
  @Input('clickableInGraph') clickableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef, public renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this._element.nativeElement, 'cursor', 'pointer');
    this.d3Service.applyclickableBehaviour(this._element.nativeElement, this.clickableNode, this.clickableInGraph);
  }
}
