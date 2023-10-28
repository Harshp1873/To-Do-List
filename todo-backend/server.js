const express = require('express')
const mongoose = require('mongoose')
const Cors = require('cors')
const dotenv = require('dotenv')
const router = require("./controllers/routes/router");


dotenv.config()

const{
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo

} = require("./controllers/todoController.js")

//app config
const app = express();

const port = process.env.PORT || 8004


const connectionURL = process.env.MONGO_URI

//middleware
// convert to json

app.use(express.json());
app.use(Cors())
app.use(router)


//DB config

mongoose 
    .connect(connectionURL)
    .then(() => {
        app.listen(port, () => console.log(`running on port: ${port}`))
    })
    .catch((err) => {
        console.log(err)
    })

//API endpoints

//Get Todo list
app.get('/todos', getTodos)

//Create Todolist
// app.post('/todos', createTodo)
app.post('/todos', (req, res) => {
    createTodo(req, res);
})
//Update Todolist
app.put('/todos/:id', updateTodo)

//Delete Todolist
app.delete('/todos/:id', deleteTodo)





