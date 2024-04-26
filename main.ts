controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -30
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -20
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-51, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(48, 0)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 110
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level0`)
tiles.setCurrentTilemap(tilemap`level2`)
