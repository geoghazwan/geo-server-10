const SerialPort = require("serialport");
const port = new SerialPort("/dev/ttyUSB1");

var GPS = require("gps");
var gps = new GPS();
gps.on("data", function (data) {
  console.log(data, gps.state);
});

port.on("data", function (data) {
  gps.update(data);
});
