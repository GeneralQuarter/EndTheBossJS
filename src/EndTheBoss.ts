import * as PIXI from 'pixi.js';
import {GameSettings} from "./GameSettings";
import {GameScene} from "./GameScene";
import {Character} from "./Model/Character";
import {CharacterController} from "./Controller/CharacterController";
import {Map} from "./Model/Map";
import {EmptyMapTile} from "./Model/EmptyMapTile";

GameSettings.updateTileSizes(window.innerHeight, window.innerHeight);

let app = new PIXI.Application(window.innerHeight, window.innerHeight, {backgroundColor : GameSettings.BACKGROUND_COLOR});
document.body.appendChild(app.view);

let gameScene = new GameScene();

let state;

let map = new Map();
let character = new Character("Tank", "123");
let characterController = new CharacterController(character, gameScene, map);

let gameLoop = (delta) => {
    state(delta);
};

let play = (delta) => {
    characterController.characterVue.updatePosition();
};

(<any>window).EndTheBoss = {
    tp: (x, y) => {
        return characterController.teleportCharacter(new EmptyMapTile(x, y));
    }
};

state = play;

app.stage.addChild(gameScene);
app.ticker.add(delta => gameLoop(delta));


