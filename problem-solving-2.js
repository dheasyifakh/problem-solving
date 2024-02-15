function ratioPlusMinus(val) {
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0

    val.forEach(num => {
        if (num > 0) {
            positiveCount++
        } else if (num < 0) {
            negativeCount++
        } else {
            zeroCount++
        }
    })

    const totalCount = val.length
    const positiveRatio = positiveCount / totalCount
    const negativeRatio = negativeCount / totalCount
    const zeroRatio = zeroCount / totalCount

    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
}

const numbersArr = [-4, 3, -9, 0, 4, 1]
ratioPlusMinus(numbersArr)