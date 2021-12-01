const net = require("net");

// // set the encoding to utf-8
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log('scream')
  })

  // conn.setEncoding("utf8");

  // conn.on('data', (message) => {
  //   console.log(message)
  // })

  return conn;
};

console.log("Connecting ...");
connect();
