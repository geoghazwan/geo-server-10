const Gpio = require("onoff").Gpio;
const led = new Gpio(17, "out");

console.log({ led });
