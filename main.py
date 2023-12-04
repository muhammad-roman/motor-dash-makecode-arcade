def on_overlap_tile(sprite, location):
    tiles.set_current_tilemap(tilemap("""
        level3
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_a_pressed():
    if player1.vy == 0:
        player1.vy = -175
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Spike1
    """),
    on_overlap_tile2)

player1: Sprite = None
scene.set_background_color(9)
gravity = 500
tiles.set_current_tilemap(tilemap("""
    level2
"""))
player1 = sprites.create(assets.image("""
    rocket
"""), SpriteKind.player)
player1.ay = gravity
scene.camera_follow_sprite(player1)
controller.move_sprite(player1, 100, 0)