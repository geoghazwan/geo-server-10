const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/ttyUSB1");
const parser = new Readline();
port.pipe(parser);

// gps.on("data", function (data) {
//   console.log(data, gps.state);
// });

port.on("data", function (data) {
  console.log({ dddddd: data });
});
