// const sumaDvokhChysel = (arr, target) => {
// 	const sortedArr = Object.entries(arr).sort((a, b) => a[1] - b[1])

// 	let leftPointer = 0
// 	let rightPointer = sortedArr.length - 1

// 	while (rightPointer > leftPointer) {
// 		let sum = sortedArr[rightPointer][1] + sortedArr[leftPointer][1]
// 		if (sum === target) {
// 			return [+sortedArr[rightPointer][0], +sortedArr[leftPointer][0]]
// 		} else {
// 			if (sum > target) {
// 				rightPointer--
// 			} else {
// 				leftPointer++
// 			}
// 		}
// 	}
// }

// console.log(sumaDvokhChysel([9, 8, 7, 6, 5, 4, 3, 2, 1], 3))
// console.log(sumaDvokhChysel([3, 6, 11, 15], 9))
// console.log(sumaDvokhChysel([3, 1, 5], 6))

// const weatherAPI = async city => {
// 	return fetch(`https://goweather.herokuapp.com/weather/${city}`).then(data =>
// 		data.json()
// 	)
// }

// (async () => {
// 	const { temperature } = await weatherAPI('Kyiv')
// 	console.log(temperature)
// })()

// const maxPrybutok = pricesArr => {
// 	let min = pricesArr[0]
// 	let max = pricesArr[pricesArr.length - 1]
// 	let index = 0

// 	for (let i = 1; i < pricesArr.length - 1; i++) {
// 		if (pricesArr[i] - min > max) {
// 			max = pricesArr[i] - min
// 		}

// 		if (pricesArr[i] < min && i !== pricesArr.length - 1) {
// 			min = pricesArr[i]
// 			index = i
// 		}
// 	}

// 	return max
// }

// const prices = [7, 1, 5, 3, 6, 4]

// console.log(maxPrybutok(prices))
