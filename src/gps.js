const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/ttyUSB1", { baudRate: 4800 });
const parser = new Readline("\r\n");
port.pipe(parser);

port.on("data", function (data) {
  console.log({ data });
});
