// Program buttons to change the program state
input.onButtonPressed(Button.A, function () {
    state = 1
})
input.onButtonPressed(Button.B, function () {
    state = 0
})
/**
 * Here we start the program, initialise the variables, and start the forever loop
 */
let plot_value = 0
let state = 0
basic.showIcon(IconNames.Asleep)
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
/**
 * If the state is not 'ON' then we make the microbit sleep
 */
/**
 * In our forever loop we measure a sound, find the plot value,
 */
/**
 * and find the value the motor should move to. Then we move the motor
 */
basic.forever(function () {
    if (state == 1) {
        plot_value = Math.round(input.soundLevel() / 131 * 180)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, plot_value)
        led.plotBarGraph(
        plot_value,
        180
        )
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Asleep)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
    }
})
