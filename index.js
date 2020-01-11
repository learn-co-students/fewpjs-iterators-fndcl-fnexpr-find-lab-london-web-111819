const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  const object = array.find( obj => {
    if (obj.result === "W") {
      return obj
    }
  })
  if (object) {
    return object.year
  }
}