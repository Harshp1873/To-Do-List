const mongoose = require('mongoose')
const Todos = require('../dbtodos')

// Get a tododlist
const getTodos = async (req, res) => {
    console.log(req.query.id);
    try{
        const allTodos = await Todos.find({deviceID:req.query.id})
        res.status(200).send(allTodos);
    }catch(error){
        res.status(400).send(error.message);
    }
}

// Create a new todo
const createTodo = async (req, res) => {
    const dbtodo = req.body
    try{
        
        const newTodo = await Todos.create(dbtodo.inpval)
        // newTodo = " ";
        res.status(201).send(newTodo);
    }catch(error){
        res.status(500).send(error.message);
    }
    
}

//Update a todo
const updateTodo = async (req, res) => {
    const {id}= req.params
    try{
    //Check the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).send('There is a todo with the id of ${id}');

    }
    const todoID = {_id: id} 
    const update = {completed: true}
     const updateTodo = await Todos.findOneAndUpdate(todoID, update);
     if(!updateTodo){
        return res.status(404).send('There is a todo with the id of ${id}');
     }  
       res.status(200).send(updateTodo);
    }catch(error){
        res.status(500).send(error.message);
    }
}

// Delete a todo
const deleteTodo = async (req, res) => {
    const id= req.query.id;
    console.log(req.query.id);
    console.log(id);
    try{
    //Check the id is valid
    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     console.log("Not Found");
    //    return res.status(404).send('There is a todo with the id of ${id}');

    // }
       
    //  const deleteTodo = await Todos.findOneAndDelete({_id: id});
    //  res.status(200).send(deleteTodo);
        await Todos.deleteOne({_id: id});
    }catch(error){
        res.status(500).send(error.message);
    }
};

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
