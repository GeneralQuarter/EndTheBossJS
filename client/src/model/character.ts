import {MapTile} from "./map-tile";

export class Character extends MapTile{
    private _uuid: string;
    private _healthMax: number;
    private _heath: number;
    private _initiative: number;
    private _resistance: number;
    private _speed: number;
    private _baseDamage: number;
    private _initialSpeed: number;
    private _name: string;

    constructor(name: string, uuid: string) {
        super();

        this.name = name;
        this.uuid = uuid;
    }

    get uuid(): string {
        return this._uuid;
    }

    set uuid(value: string) {
        this._uuid = value;
    }

    get healthMax(): number {
        return this._healthMax;
    }

    set healthMax(value: number) {
        this._healthMax = value;
    }

    get heath(): number {
        return this._heath;
    }

    set heath(value: number) {
        this._heath = value;
    }

    get initiative(): number {
        return this._initiative;
    }

    set initiative(value: number) {
        this._initiative = value;
    }

    get resistance(): number {
        return this._resistance;
    }

    set resistance(value: number) {
        this._resistance = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get baseDamage(): number {
        return this._baseDamage;
    }

    set baseDamage(value: number) {
        this._baseDamage = value;
    }

    get initialSpeed(): number {
        return this._initialSpeed;
    }

    set initialSpeed(value: number) {
        this._initialSpeed = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}