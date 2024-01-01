const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://abhishekshivale21:niAcNvZX9eNR2mkS@cluster0.m1ovjoj.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo',todoSchema)
module.exports ={
    todo
}