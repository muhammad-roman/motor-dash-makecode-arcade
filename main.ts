scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spike1`, function (sprite2, location2) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.vy == 0) {
        player1.vy = -175
    }
})
let player1: Sprite = null
scene.setBackgroundColor(9)
let gravity = 500
tiles.setCurrentTilemap(tilemap`level2`)
player1 = sprites.create(assets.image`rocket`, SpriteKind.Player)
player1.ay = gravity
scene.cameraFollowSprite(player1)
controller.moveSprite(player1, 100, 0)
