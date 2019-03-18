const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (arrOfObjs) => {
  let win = arrOfObjs.find( obj => obj.result === "W");
  return (win ? win.year : undefined);
}
