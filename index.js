const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let win = arr.find( g => g.result === 'W');
  if(win === undefined) {
    return undefined;
  } else {
    return win.year;
  }
}
