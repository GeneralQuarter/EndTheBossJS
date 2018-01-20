import {GameSettings} from "./game-settings";
import {GameScene} from "./game-scene";
import {Character} from "./model/character";
import {CharacterController} from "./controller/character-controller";
import {Map} from "./model/map";
import {EmptyMapTile} from "./model/empty-map-tile";
import * as io from "socket.io-client";

let socket = io();

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


