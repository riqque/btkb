bluetooth.onBluetoothConnected(function () {
    serial.writeLine("kbconctd")
})
bluetooth.startKeyboardService()
serial.writeLine("kbserstartd")
basic.forever(function () {
    serial.writeLine("hw")
    bluetooth.keyboardSendText("Hw")
    basic.pause(3000)
})
