const express = require('express')
const app = express()
const {todo} = require('./db')
const cors = require('cors')
const schemaZod = require('./types')
// title: string 
//description: string
app.use(express.json())
app.use(cors())
app.post('/todo', async (req,res)=>{
    console.log("request",req.body)
    const createPayload = req.body;
    const parseCreatPayload = schemaZod.creatTodo.safeParse(createPayload)
    if(!parseCreatPayload.success){
        res.status(411).json({
            msg: "Y0u sent wrong Input"
        })
        return;
    }
   await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo created"
    })

})
app.get('/todos', async(req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
})
app.put('/completed', async (req,res)=>{
    const updatePayLoad = req.body;
    const parseUpdatePayload = schemaZod.updateTodo.safeParse(updatePayLoad)
    if(!parseUpdatePayload.success){
        res.status(411).json({
            msg: "Y0u sent wrong Input"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"Todo Marked as Completed"
    })
})


app.listen(5000,()=>{
    console.log("Server Is runing")
})