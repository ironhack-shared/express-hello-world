const express = require('express')


const app = express()

app.use(express.static('public'))

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
