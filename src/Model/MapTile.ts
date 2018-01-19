export abstract class MapTile {
    private _x: number;
    private _y: number;

    constructor() {}

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    toString(): string {
        return "MapTile(" + this.x + "," + this.y + ")";
    }
}