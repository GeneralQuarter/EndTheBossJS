import {Character} from "../model/character";
import {CharacterVue} from "../vue/character-vue";
import {GameScene} from "../game-scene";
import {Map} from "../model/map";
import {MapTile} from "../model/map-tile";
import {Logger} from "../utils/logger";

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