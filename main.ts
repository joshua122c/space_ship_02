function ship_move (num: number) {
    if (num == 1) {
        if (ship[0][0] != 0) {
            for (let index = 0; index <= 3; index++) {
                max7219_matrix.setValueInMatrix(
                screen,
                ship[index][0],
                ship[index][1],
                0
                )
            }
            max7219_matrix.displayLEDsForOne(
            screen,
            0
            )
            s = ship[0][0]
            ship[0][0] = s - 1
            ship[1][0] = s
            ship[2][0] = s
            ship[3][0] = s + 1
        }
        for (let index = 0; index <= 3; index++) {
            max7219_matrix.setValueInMatrix(
            screen,
            ship[index][0],
            ship[index][1],
            1
            )
        }
        max7219_matrix.displayLEDsForOne(
        screen,
        0
        )
    } else if (num == 4) {
        if (ship[3][0] != 7) {
            for (let index = 0; index <= 3; index++) {
                max7219_matrix.setValueInMatrix(
                screen,
                ship[index][0],
                ship[index][1],
                0
                )
            }
            max7219_matrix.displayLEDsForOne(
            screen,
            0
            )
            s = ship[3][0]
            ship[0][0] = s - 1
            ship[1][0] = s
            ship[2][0] = s
            ship[3][0] = s + 1
        }
        for (let index = 0; index <= 3; index++) {
            max7219_matrix.setValueInMatrix(
            screen,
            ship[index][0],
            ship[index][1],
            1
            )
        }
        max7219_matrix.displayLEDsForOne(
        screen,
        0
        )
    }
}
/**
 */
let s = 0
let ship: number[][] = []
let screen: number[][] = []
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
let Ti = 100
screen = max7219_matrix.getEmptyMatrix()
ship = [
[3, 7],
[4, 6],
[4, 7],
[5, 7]
]
for (let index = 0; index <= 3; index++) {
    max7219_matrix.setValueInMatrix(
    screen,
    ship[index][0],
    ship[index][1],
    1
    )
}
max7219_matrix.displayLEDsForOne(
screen,
0
)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        ship_move(1)
        basic.showNumber(1)
    } else if (pins.analogReadPin(AnalogPin.P0) < 200) {
    	
    } else if (pins.analogReadPin(AnalogPin.P0) < 300) {
    	
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        ship_move(4)
        basic.showNumber(4)
    } else if (pins.analogReadPin(AnalogPin.P0) < 460) {
    	
    }
})
