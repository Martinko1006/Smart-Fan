let temp = 0
OLED.init(128, 64)
basic.forever(function () {
    temp = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P2)
    OLED.clear()
    OLED.writeString("Tempeature:")
    OLED.writeNum(temp)
    if (temp > 30) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
