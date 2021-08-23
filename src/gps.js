const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/ttyUSB1", { baudRate: 4800 });
const parser = new Readline("\r\n");
var GPS = require("gps");
var gps = new GPS();
port.pipe(parser);

gps.on("data", function (data) {
  console.log(data);
});

port.on("data", function (data) {
  gps.update(data);
});
