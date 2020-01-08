
// const superbowlWin =  record.find()
//
// }


function superbowlWin(array){
  const result = array.find(key => key.result === "W")
  if(result) {
    return result.year;
  } else {
    return undefined;
  }
}
