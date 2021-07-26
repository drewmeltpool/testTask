import express from 'express'

const PORT = 3000
const app = express()

app.get('/hello', (req, res) => {
	const { name = null } = req.query
	const message = {
		message: `Hello ${name}`,
	}
	res.send(JSON.stringify(message))
})

app.listen(PORT)
