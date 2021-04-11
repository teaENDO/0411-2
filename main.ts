radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 0) {
        停止()
    } else if (receivedNumber == 1) {
        前進()
    } else if (receivedNumber == 2) {
        後進()
    } else if (receivedNumber == 3) {
        左前進右まわり()
    } else if (receivedNumber == 4) {
        右前進左まわり()
    } else if (receivedNumber == 5) {
        右ツイスト()
    } else if (receivedNumber == 6) {
        左ツイスト()
    }
})
function 後進 () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P13, 350)
    pins.analogWritePin(AnalogPin.P15, 350)
}
function 左後進 () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.analogWritePin(AnalogPin.P13, 350)
}
function 右ツイスト () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 350)
    pins.analogWritePin(AnalogPin.P13, 350)
}
function 右前進左まわり () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P15, 350)
    pins.analogWritePin(AnalogPin.P13, 0)
}
function 前進 () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P13, 350)
    pins.analogWritePin(AnalogPin.P15, 350)
}
function 左前進右まわり () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogWritePin(AnalogPin.P13, 350)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function 停止 () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
}
function 右後進 () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P15, 350)
}
function 左ツイスト () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P15, 350)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.analogWritePin(AnalogPin.P13, 350)
}
radio.setGroup(1)
