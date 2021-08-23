const Gpio = require("onoff").Gpio;
const led = new Gpio(10, "out");

console.log({ led: led.readSync() });
