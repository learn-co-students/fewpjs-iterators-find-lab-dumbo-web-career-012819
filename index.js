const superbowlWin = (array) => {
  try {
    return array.find((team) => {
      return team.result === "W"
    }).year
  }
  catch(error){
    return undefined
  }
}
