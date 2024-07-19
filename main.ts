let tmp = 0
let menu = 1
basic.forever(function () {
    tmp = 0
    for (let index = 0; index < 5; index++) {
        led.unplot(tmp, 0)
        led.unplot(tmp, 1)
        led.unplot(tmp, 2)
        led.unplot(tmp, 3)
        led.unplot(tmp, 4)
        tmp += 1
    }
    if (menu > 1 && menu < 8) {
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(1, 2)
        led.plot(3, 2)
    }
    if (menu == 1) {
        basic.pause(1000)
        menu += 1
    } else if (menu == 2) {
        basic.pause(2000)
        menu += 1
    } else if (menu == 3) {
        led.plot(0, 4)
        basic.pause(500)
        menu += 1
    } else if (menu == 4) {
        led.plot(0, 4)
        led.plot(1, 4)
        basic.pause(500)
        menu += 1
    } else if (menu == 5) {
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        basic.pause(1000)
        menu += 1
    } else if (menu == 6) {
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        basic.pause(200)
        menu += 1
    } else if (menu == 7) {
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        basic.pause(1000)
        menu += 1
    } else if (menu == 8) {
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        basic.pause(1000)
        menu += 1
    } else if (menu == 9) {
        basic.showString("Welcome to MicroOS Choose an app:")
        menu += 1
    } else {
        led.plot(0, 4)
        led.plot(4, 4)
    }
})
