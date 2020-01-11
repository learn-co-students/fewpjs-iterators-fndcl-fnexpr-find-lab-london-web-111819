const testVar = [
  {year: "2018", result: "L"},
  {year: "2017", result: "L"},
  {year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}

function superbowlWin(objectsArr) {
  let targetGame = objectsArr.find(function(game) {
    return game.result === 'W'
  })
  if (targetGame) {
    return targetGame.year
  }
}

