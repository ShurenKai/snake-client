let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  switch (key) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case '\u0003':
    process.exit();
  }
};

module.exports = setupInput;

// switch(key){
//   case (key == 'w'):
//     setInterval(() => {
//       stdin.write('Move: up')
//     },);
//     break;
//   case (key == 'a'):
//     setInterval(() => {
//       stdin.write('Move: left')
//     },)
//     break
//   case (key == 's'):
//     setInterval(() => {
//       stdin.write('Move: down')
//     },)
//     break
//   case (key == 'd'):
//     setInterval(() => {
//       stdin.write('Move: right')
//     },)
//     break
// }