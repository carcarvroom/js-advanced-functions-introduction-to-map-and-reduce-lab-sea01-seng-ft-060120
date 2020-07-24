// Your code here

const mapToNegativize = (sourceArray) => {
  let newArray = []
  for (let element of sourceArray) {
    newArray.push(element * -1)
  }
  return newArray
}

const mapToNoChange = (sourceArray) => {
  return sourceArray
}

const mapToDouble = (sourceArray) => {
  let newArray = []
  for (let element of sourceArray) {
    newArray.push(element * 2)
  }
  return newArray
}

const mapToSquare = (sourceArray) => {
  let newArray = []
  for (let element of sourceArray) {
    newArray.push(element * element)
  }
  return newArray
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  let total = startingPoint
  for (let element of sourceArray) {
    total += element
  }
  return total
}

const reduceToAllTrue = (sourceArray) => {
  for (let element of sourceArray) {
    if (element === false) {
      return false
    }
  }
  return true
}

const reduceToAnyTrue = (sourceArray) => {
  for (let element of sourceArray) {
    if (element === true) {
      return true
    }
  }
  return false
}