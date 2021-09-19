input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() >= 8 && input.temperature() <= 30) {
        basic.showString("T. Normal")
    }
    while (input.temperature() < 8) {
        music.playTone(494, music.beat(BeatFraction.Whole))
        basic.showString("T. Baja")
    }
    while (input.temperature() > 30) {
        music.playTone(147, music.beat(BeatFraction.Whole))
        basic.showString("T. Alta")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    while (input.lightLevel() >= 100 && input.lightLevel() <= 200) {
        basic.showString("Nivel Ideal")
    }
    while (input.lightLevel() < 100) {
        basic.showString("Nivel Bajo")
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    while (input.lightLevel() > 200) {
        basic.showString("Nivel Alto")
        music.playTone(165, music.beat(BeatFraction.Whole))
    }
})
