scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.vy == 0) {
        player1.vy = -175
    }
})
let player1: Sprite = null
let gravity = 500
tiles.setCurrentTilemap(tilemap`level2`)
player1 = sprites.create(assets.image`scooter`, SpriteKind.Player)
player1.ay = gravity
scene.cameraFollowSprite(player1)
controller.moveSprite(player1, 100, 0)
