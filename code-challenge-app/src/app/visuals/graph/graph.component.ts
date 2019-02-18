import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { D3Service } from '../../d3/d3.service'
import { ForceDirectedGraph } from '../../d3/models/force-directed-graph';


@Component({
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('nodes') nodes;
  @Input('links') links;
  @Input('photos') photos;
  graph: ForceDirectedGraph;
  private _options: { width, height } = { width: 800, height: 600 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngOnInit() { }
  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}