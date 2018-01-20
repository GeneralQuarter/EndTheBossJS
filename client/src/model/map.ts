import {MapTile} from "./map-tile";
import {GameSettings} from "../game-settings";
import {EmptyMapTile} from "./empty-map-tile";
import {Character} from "./character";
import {Logger} from "../utils/logger";

export class Map {
    tiles: MapTile[][];

    constructor() {
        this.tiles = [];

        for (let y = 0; y < GameSettings.HOR_TILES; y++) {
            this.tiles[y] = [];
            for (let x = 0; x < GameSettings.VER_TILES; x++) {
                this.tiles[y][x] = new EmptyMapTile(x, y);
            }
        }
    }

    /**
     * Teleports a character to a destination tile on the map
     *
     * @param {Character} character
     * @param {MapTile} destination
     * @returns {boolean} true if the character was successfully teleported
     */
    teleportCharacter(character: Character, destination: MapTile): boolean {
        if (!this.isTileEmpty(destination)) {
            Logger.w("Map", "Destination " + destination.toString() + " is not empty or not in the map");
            return false;
        }

        if (character.x && character.y) {
            this.setTile(new EmptyMapTile(character.x, character.y));
        }
        character.x = destination.x;
        character.y = destination.y;
        this.setTile(character);
        return true;
    }

    /**
     * Get the map tile on the map at the location given
     * @param {MapTile} mapTile
     * @returns {MapTile}
     */
    getTile(mapTile: MapTile) {
        return this.tiles[mapTile.y][mapTile.x];
    }

    setTile(mapTile: MapTile) {
        Logger.d("Map", "setTile " + mapTile.toString());
        this.tiles[mapTile.y][mapTile.x] = mapTile;
    }

    /**
     * Is the location of the tile given inside the map
     * @param {MapTile} mapTile
     * @returns {boolean} true if it is
     */
    static isTileValid(mapTile: MapTile): boolean {
        return mapTile.x >= 0 &&
            mapTile.x < GameSettings.HOR_TILES &&
            mapTile.y >= 0 &&
            mapTile.y < GameSettings.VER_TILES;
    }

    /**
     * Is the location of the tile given empty on the map
     * @param {MapTile} mapTile
     * @returns {boolean} true if it is
     */
    isTileEmpty(mapTile: MapTile): boolean {
        return Map.isTileValid(mapTile) &&
            this.getTile(mapTile) instanceof EmptyMapTile;
    }
}