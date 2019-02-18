import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
    // optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    user?: object;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;

    id: string;
    linkCount = 0;

    constructor(id, user) {
        this.id = id;
        this.user = user;
        this.index = id - 1;
    }

    normal = () => {
        return Math.sqrt(this.linkCount / 100);
    }

    get r() {
        return 50 * this.normal() + 10;
    }

    get fontSize() {
        return (30 * this.normal() + 10) + 'px';
    }

    get color() {
        const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
        return APP_CONFIG.SPECTRUM[index] || APP_CONFIG.SPECTRUM[APP_CONFIG.SPECTRUM.length - 1];
    }
}