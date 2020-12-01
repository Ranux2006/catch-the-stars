input.onButtonPressed(Button.A, function () {
    if (dir == 0) {
        p1.change(LedSpriteProperty.X, 1)
    } else if (dir == 1) {
        p1.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (dir == 0) {
        dir = 1
    } else if (dir == 1) {
        dir = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (dir == 0) {
        p2.change(LedSpriteProperty.X, -1)
    } else if (dir == 1) {
        p2.change(LedSpriteProperty.X, 1)
    }
})
let dir = 0
let p2: game.LedSprite = null
let p1: game.LedSprite = null
let star1 = game.createSprite(0, 0)
let star2 = game.createSprite(4, 0)
p1 = game.createSprite(0, 4)
p2 = game.createSprite(4, 4)
dir = 0
let p1t = 0
let p2t = 0
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    star1.change(LedSpriteProperty.Y, 1)
    star2.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    if (star1.isTouching(p1)) {
        game.addLife(1)
    }
    if (star2.isTouching(p2)) {
        game.addLife(1)
    }
    if (star1.get(LedSpriteProperty.Y) == 4) {
        star1.set(LedSpriteProperty.X, randint(0, 2))
        star1.set(LedSpriteProperty.Y, 0)
        basic.pause(100)
    }
    if (star2.get(LedSpriteProperty.Y) == 4) {
        star2.set(LedSpriteProperty.X, randint(2, 4))
        star2.set(LedSpriteProperty.Y, 0)
        basic.pause(100)
    }
    if (p1.get(LedSpriteProperty.X) == 3) {
        game.removeLife(1)
        p1.set(LedSpriteProperty.X, 0)
    }
    if (p1.get(LedSpriteProperty.X) == 1) {
        game.removeLife(1)
        p2.set(LedSpriteProperty.X, 4)
    }
})
