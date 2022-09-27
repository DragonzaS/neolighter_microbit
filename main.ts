input.onButtonPressed(Button.AB, function () {
    mode = mode * -1
    strip.clear()
    if (mode == 1) {
        strip.showRainbow(1, 360)
    }
})
let graphMax
let graphvalue = 0 
let timer = 0
let timer2 = 0
let mode = 0
let strip: neopixel.Strip = null
let rainbowDelay = 100
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
let brightness = 127
mode = 1
let warningshift = 1
strip.showRainbow(1, 255)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (mode == 1) {
            if (10 < rainbowDelay) {
                rainbowDelay += -1
            }
        } else if(mode == -1) {
            if (0 < brightness) {
                brightness += -1
            }
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (mode == 1) {
            if (rainbowDelay < 500) {
                rainbowDelay += 1
            }
        } else if(mode == -1) {
            if (brightness < 255) {
                brightness += 1
            }
        }
    }
    if (mode == 1) {
        if (timer2 == 0) {
            timer2 = control.millis()
        } else if (control.millis() - timer2 > rainbowDelay) {
            timer2 = 0
            strip.rotate(1)
        }
        strip.setBrightness(brightness)
        strip.show()
    } else if (mode == -1) {
        strip.setBrightness(brightness)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    strip.setBrightness(brightness)
})
control.inBackground(function () {
    while (true) {
        if( mode == -1) {
            if (100 < brightness) {
                if (timer == 0) {
                    timer = control.millis()
                } else if (control.millis() - timer > 500) {
                    warningshift = warningshift * -1
                    timer = 0
                }
                if (warningshift == 1) {
                    basic.showLeds(`
                    . # # # .
                    . # # # .
                    . . # . .
                    . . . . .
                    . . # . .
                    `)
                } else {
                    basic.showLeds(`
                    # . . # .
                    . # . . #
                    . # . . #
                    # . . # .
                    # # # # #
                    `)
                }
            }
        }
        if (mode == 1) {
            graphvalue = rainbowDelay
            graphMax = 500
        } else {
            graphvalue = brightness
            graphMax = 255
        }
        led.plotBarGraph(
        graphvalue,
        graphMax
        )
    }
})
