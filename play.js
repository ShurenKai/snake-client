const connect = require('./client')

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
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
};

setupInput()