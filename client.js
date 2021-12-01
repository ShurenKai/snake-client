const net = require('net')
let name = 'Ren';

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('successfully connected to the game server!')
    conn.write("Name: Ren")
  })

  // conn.on('data', (data) => {
  //   console.log('Server says: ', data);
  // });

  return conn;
};

module.exports = {connect};


//for later
  // process.stdin.on('data', () => {
  //   if(key === 'w'){
  //     setTimeout(() => {
  //       process.stdin.write('Move: up')
  //     }, 50)
  //   }
  //   else if(key === 's'){
  //     setTimeout(() => {
  //       process.stdin.write('Move: down')
  //     }, 50)
  //   }
  //   else if(key === 'a'){
  //     setTimeout(() => {
  //       process.stdin.write('Move: left')
  //     }, 50)
  //   }
  //   else if(key === 'd'){
  //     setTimeout(() => {
  //       process.stdin.write('Move: right')
  //     })
  //   }
  //   else if (key === '\u0003') {
  //     process.exit();
  //   }
  // })