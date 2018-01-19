export class GameSettings {
    static HEIGHT: number = 0;
    static WIDTH: number = 0;

    static HOR_TILES: number = 20;
    static VER_TILES: number = 20;

    static TILE_HEIGHT: number = GameSettings.HEIGHT/GameSettings.VER_TILES;
    static TILE_WIDTH: number = GameSettings.WIDTH/GameSettings.HOR_TILES;

    static BACKGROUND_COLOR: number = 0x1099bb;

    static updateTileSizes(height: number, width: number): void {
        GameSettings.HEIGHT = height;
        GameSettings.WIDTH = width;

        GameSettings.TILE_HEIGHT = GameSettings.HEIGHT/GameSettings.VER_TILES;
        GameSettings.TILE_WIDTH = GameSettings.WIDTH/GameSettings.HOR_TILES;
    }
}