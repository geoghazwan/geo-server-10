var SerialPort = require("serialport");
var port = new SerialPort.SerialPort("/dev/ttyUSB1", {
  // change path
  baudrate: 4800,
  parser: SerialPort.parsers.readline("\r\n"),
});

var GPS = require("gps");
var gps = new GPS();

gps.on("data", function (data) {
  console.log(data, gps.state);
});

port.on("data", function (data) {
  gps.updatePartial(data);
});
