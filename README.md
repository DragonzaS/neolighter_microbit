# **NeoLighter**

### **About**
#### > _What is this, it's functions and everything else_
This is a smaller program made for [micro:bit](https://microbit.org/), which has two modes:
##### **Rainbow**
Colorful rainbow is going to show up on the NeoPixel LED strip when you switch to this mode.
##### **Torch**
Can be used to light up dark places. ***Also features adjustable brightness!!***
**Also is recommended to have some sort of cooling on the LEDs.**
### **How to import into Makecode**
To import this repository into MakeCode:

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/dragonzas/hmm** and click import

### **Requirements and Usage**
#### Requirements
* WS2812B NeoPixel LED strip(max length that your power supply can handle and which will also handle the micro:bit)
* Standalone power supply with voltage(5 volts, 12 volts, or other) required for the LEDs (Optional, but micro:bit's built-in supply won't handle much) 
* Cables to connect everything together
* Any other parts you think you require.

Button A is for decreasing brightness and Button B for the opposite.
Press both buttons at the same time to switch modes.

#### Usage (This is not instruction how to PROPERLY do it, use any other required parts to properly power the LEDs and maybe Logic shifter from 3.3V to 5V)
* Connect the **DATAIN** pin of LED strip to **P0** of Micro:bit.
* Connect Power to the LEDs.
* Set the length of the LED strip in code to what it is.
* Flash the code to micro:bit and enjoy!

