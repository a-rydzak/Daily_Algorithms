const express = require ('express')
const Joi = require('joi')
const app =express()

app.use(express.json()) //Middleware that parses json data

const courses =[
	{id: 1, name: 'Maths'},
	{id: 2, name: 'History'},
	{id: 3, name: 'Art'}
]

app.get('/', (req, res)=> {
	res.send('OH Hi Mark')
})

app.get('/api/courses', (req,res) => {
	res.send([1,2,3,4,5,6,7])
})

app.get('/api/courses/:id', (req,res) => {
	const course =courses.find(c => c.id === parseInt(req.params.id))
	if(!course) res.status(404).send('The course was not found')
	res.send(course.name)
})

//Tested this using Postman (POST, from BODY, using RAW, JSON type)

app.post('/api/courses', (req,res)=> {
	const { error } = validateCourse(req.body)

	if(error){
		res.status(400).send(error.details[0].message);
		return
	}
	// if(!req.body.name || req.body.name.length <3){
	// 	res.status(404).send('Name is required and  minimum of 3 characters')
	// }
	const course = {
		id: courses.length +1,
		name: req.body.name
	}
	courses.push(course)
	res.send(course)
})

app.put('/api/courses/:id', (req,res) =>{

	const course =courses.find(c => c.id === parseInt(req.params.id))
	if(!course) res.status(404).send('The course was not found')
	
	// const result = validateCourse(req.body)
	const { error } = validateCourse(req.body)

	if(error){
		res.status(400).send(error.details[0].message);
		return
	}

	course.name=req.body.name
	res.send(course)
})

function validateCourse(course){
	const schema={
		name: Joi.string().min(3).required()
	}
	return Joi.validate(course, schema)
}


//http://localhost:3000/api/posts/2018/1?sortBy=name, query string paramter for optional paramater

app.get('/api/posts/:year/:month', (req,res) => {
	// res.send(req.params)
	//res.send(req.query)
})
// app.post()
// app.put()
// app.delete()
//Assign a port to an express application
const port=process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port', port))