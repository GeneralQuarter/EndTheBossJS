import * as PIXI from 'pixi.js';
import {Character} from "../Model/Character";
import {GameSettings} from "../GameSettings";

export class CharacterVue extends PIXI.Graphics {
    private _character: Character;

    constructor(character: Character) {
        super();
        this.character = character;

        this.lineStyle(1, 0xFF3300, 1);
        this.beginFill(0x66CCFF);
        this.drawRect(0, 0, GameSettings.TILE_WIDTH - 2, GameSettings.TILE_HEIGHT - 2);
        this.endFill();
        this.updatePosition();
    }

    updatePosition() {
        this.x = this.character.x * GameSettings.TILE_WIDTH + 1;
        this.y = this.character.y * GameSettings.TILE_HEIGHT + 1;
    }

    get character(): Character {
        return this._character;
    }

    set character(value: Character) {
        this._character = value;
    }
}