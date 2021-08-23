const SerialPort = require("serialport");
const port = new SerialPort("/dev/ttyUSB1");

port.on("data", function (data) {
  console.log({ data });
});
