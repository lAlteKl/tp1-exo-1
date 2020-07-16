let ligne = 0
let colonne = 0
let Direction2 = 1
led.plot(colonne, ligne)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(colonne, 0)
    colonne += Direction2
    if (colonne == 4) {
        Direction2 += -1
    }
    if (colonne == 0) {
        Direction2 += 1
    }
    led.plot(colonne, 0)
})
