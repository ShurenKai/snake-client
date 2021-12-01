const net = require('net')
let name = 'Ren';

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log('successfully connected to the game server!')
    conn.write("Name: Ren" )
  })

  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.export = connect();