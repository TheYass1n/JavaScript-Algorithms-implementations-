
const BinarySearch = (arr, target) => {
    let startOfArray = 0
    let endOfArray = arr.length - 1

    while (startOfArray <= endOfArray) {

        //check the array middle
        let middleOfArray = Math.floor((startOfArray + endOfArray) / 2)

        // start search from the middle of the array
        let guess = arr[middleOfArray]

        // if target found return it
        if (guess === target) return middleOfArray

        // if guess was high than our target
        // then search from the left side of the array 
        // and start from middle 
        if (guess > target) endOfArray = middleOfArray - 1

        // if guess was low than our target
        // then search from the right side of the array
        // and start from middle
        else startOfArray = middleOfArray + 1
    }

    // if target doesn’t exist in the array
    return 'The target doesn’t exist in the array'
}

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

BinarySearch(numberList, 1) // return 0
BinarySearch(numberList, 6) // return 5
BinarySearch(numberList, 10) // return 9