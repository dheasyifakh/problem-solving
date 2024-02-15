function minMaxSum(arr) {
    // sorting array
    arr.sort((a, b) => a - b)
    
    const minimum = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0)
    
    const maximum = arr.slice(1).reduce((acc, curr) => acc + curr, 0)

    return [minimum, maximum]
}

const numbers = [1, 2, 3, 4, 5]
const [min, max] = minMaxSum(numbers)
console.log(min, max)