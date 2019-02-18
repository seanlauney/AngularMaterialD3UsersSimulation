
import { Injectable, EventEmitter } from '@angular/core';
import { Node } from './models/node';
import { Link } from './models/link';
import { ForceDirectedGraph } from './models/force-directed-graph';
import * as d3 from 'd3';
import { MatDialog } from '@angular/material';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
    * while maintaining the d3 simulations physics
    */
  constructor(public dialog: MatDialog) { }

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    }

    zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom);
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);

    function started() {
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      d3.event.on('drag', dragged).on('end', ended);

      function dragged() {
        node.fx = d3.event.x;
        node.fy = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
      }
    }

    d3element.call(d3.drag()
      .on('start', started));
  }
  applyclickableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const _this = this
    const d3element = d3.select(element);

    function started() {
      /** Preventing propagation of dragstart to parent elements */
      // d3.event.sourceEvent.stopPropagation();

      d3element.on('click', clicked)

      function clicked() {
        _this.dialog.open(UserDetailsComponent, {
          minWidth: '450px',
          minHeight: '100%',
          data: node.user
        });
      }
    }
    started();
  }


  /** The interactable graph we will simulate in this article
  * This method does not interact with the document, purely physical calculations with d3
  */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    const sg = new ForceDirectedGraph(nodes, links, options);
    return sg;
  }
}