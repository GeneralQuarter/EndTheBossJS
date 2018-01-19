import {Character} from "../Model/Character";
import {CharacterVue} from "../Vue/CharacterVue";
import {GameScene} from "../GameScene";
import {Map} from "../Model/Map";
import {MapTile} from "../Model/MapTile";
import {Logger} from "../Logger";

export class CharacterController {
    character: Character;
    characterVue: CharacterVue;

    gameScene: GameScene;
    map: Map;

    constructor(character: Character, gameScene: GameScene, map: Map) {
        this.character = character;
        this.gameScene = gameScene;
        this.map = map;

        this.characterVue = new CharacterVue(this.character);
        this.gameScene.addChild(this.characterVue);
    }

    teleportCharacter(mapTile: MapTile) {
        Logger.d("CharacterController", "Teleport " + this.character.name + " to " + mapTile.toString());
        return this.map.teleportCharacter(this.character, mapTile);
    }
}