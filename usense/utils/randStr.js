const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXY'

const randInt = (min, max) => ~~(Math.random() * (max - min) + min)

const randStr = strLen =>
	new Array(strLen)
		.fill(0)
		.map(() => CHARS[randInt(0, CHARS.length)])
		.join('')

export default randStr
