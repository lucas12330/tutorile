let strip = 0
basic.forever(function () {
    basic.showLeds(`
        # . . # #
        . # # # #
        . . . # .
        . . # . .
        . # . . .
        `)
    strip += 1
    basic.pause(1000)
})
