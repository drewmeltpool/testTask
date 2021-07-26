import isPolindrom from './isPolindrom.js'
import isNumber from './isNumber.js'
import isContainsZero from './isContains.js'
import randStr from './randStr.js'

export default {
	isPolindrom,
	isNumber,
	isContainsZero,
	randStr,
}

const strategy = new Map()

strategy.set(isNumber, () => 'is number')
strategy.set(isPolindrom, () => 'is polindrom')
strategy.set(isContainsZero, () => 'have zero')

const check = value => {
	const keys = [...strategy.keys()]

	for (const func of keys) {
		if (func(value)) {
			return strategy.get(func)()
		}
	}
}

console.log(check('01a0a1'))
