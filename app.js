const express = require('express')


const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    address: {
      street: "Your heart",
      number: 87
    },
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
  }

  res.render('index', data)
})

app.get('/asdf', (request, response, next) => {
  console.log(request);
  response.json({hola: 'mundo'});
})

app.get('/:id', (request, response, next) => {
  console.log(request.params)
  response.sendFile(__dirname + `/views/${request.params.id}-page.html`)
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
})
