const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('successfully connected to the game server!');
    conn.write("Name: Ren");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = connect;