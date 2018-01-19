import {MapTile} from "./MapTile";

export class EmptyMapTile extends MapTile{

    constructor(x: number, y: number) {
        super();

        this.x = x;
        this.y = y;
    }
}