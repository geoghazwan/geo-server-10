const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort(path);
const parser = new Readline();
port.pipe(parser);

// gps.on("data", function (data) {
//   console.log(data, gps.state);
// });

port.on("data", function (data) {
  console.log({ dddddd: data });
});
