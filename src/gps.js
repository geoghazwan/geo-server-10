const SerialPort = require("serialport");
const port = new SerialPort("/dev/ttyUSB1", { baudRate: 4800 });

port.on("data", function (data) {
  console.log({ data });
});
