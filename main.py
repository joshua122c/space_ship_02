max7219_matrix.setup(1,
    DigitalPin.P16,
    DigitalPin.P15,
    DigitalPin.P14,
    DigitalPin.P13)
screen = max7219_matrix.get_empty_matrix()
max7219_matrix.set_value_in_matrix(screen, 4, 7, 1)
max7219_matrix.display_le_ds_for_one(screen, 0)

def on_forever():
    if pins.analog_read_pin(AnalogPin.P0) < 100:
        pass
    elif False:
        pass
    else:
        pass
basic.forever(on_forever)
