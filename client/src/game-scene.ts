import * as PIXI from 'pixi.js';
import {GameSettings} from "./game-settings";

export class GameScene extends PIXI.Container {

    constructor() {
        super();
        this.createAndAddGridLines(2, 0xFFFFFF);
    }

    private createAndAddGridLines(lineWidth: number, lineColor: number): void {
        let linesContainer = new PIXI.Container();

        for (let x = 1; x < GameSettings.HOR_TILES; x++) {
            let line = new PIXI.Graphics();
            line.lineStyle(lineWidth, lineColor, 1);
            line.moveTo(0, 0);
            line.lineTo(0, GameSettings.HEIGHT);
            line.x = x * GameSettings.TILE_WIDTH;
            line.y = 0;
            linesContainer.addChild(line);
        }

        for (let y = 1; y < GameSettings.VER_TILES; y++) {
            let line = new PIXI.Graphics();
            line.lineStyle(lineWidth, lineColor, 1);
            line.moveTo(0, 0);
            line.lineTo(GameSettings.WIDTH, 0);
            line.x = 0;
            line.y = y * GameSettings.TILE_WIDTH;
            linesContainer.addChild(line);
        }

        this.addChild(linesContainer);
    }
}