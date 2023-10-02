const express = require('express')

const app = express()

const port = process.env.NODE_PORT || 4000

app.get('/', (req, res) => {
	return res.status(200).json([
		{
			userId: 1,
			id: 1,
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, perferendis?',
			body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel possimus excepturi reiciendis incidunt distinctio nam rerum maxime quisquam accusantium voluptatum.'
		}
	])
})

app.listen(4000, () => console.log(`Server started at port ${port}`))
