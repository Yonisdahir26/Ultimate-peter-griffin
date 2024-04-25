controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -20
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -20
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 0)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 100
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
