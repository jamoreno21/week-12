var express = require("express") 
require("dotenv").config();

var app = express()

var data = require("./public/database.json") //lets me access the data base

app.use(express.json); //turns the file into json
// app.get("/workers", (req, res) => {
//   res.send("Hello World")

// })

app.get("/workers", (req, res) => {
  if (!data) {
    res.status(404).send("Could not find the information")
  }


  res.send(data)

})


app.get("/workers/:id", (req, res) => {

  const findEmployee = data.workers.find(function (employee) {

    return parseInt(req.params.id) === employee.id

  })

  if (!findEmployee) {
    res.status(404).send("Could not find the information")
  }


  res.send(findEmployee)

})


app.post("/workers", (req, res) => {

  const findEmployee = {
    id: data.workers.length + 1,
    name: req.body.name,
    salary: req.body.salary,
    occupation: req.body.occupation

  }


  if (!findEmployee) {
    res.status(404).send("Could not find the information")
  }

  data.workers.push(findEmployee)

  res.send(findEmployee)

  return
})

app.delete('/workers/:id', (req,res) =>{
  const findEmployee = data.workers.find(function(employee){
    return parseInt(req.params.id) === employee.id
})

if (!findEmployee){
  res.send(404).send('Could not find information')
}

const index = data.workers.indexOf(findEmployee)
  data.workers.splice(index,1)

  res.send(findEmployee)

})


const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`server is running on ${port}`)
})