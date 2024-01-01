import React, { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    async function addTodo(){
    await fetch(`http://localhost:5000/todo`,{
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }), headers: {"Content-type":"application/json"}
        })
    .then(async function(res){
            const json = await res.json();
            alert("Todo added");})
    }

   return (<div>

    <input placeholder='Title' onChange={(e)=>{  setTitle(e.target.value)}} value={title}></input>
    <input placeholder='description' onChange={(e)=>{ setDescription(e.target.value)}} value={description}></input>
    <button onClick={addTodo}>Add Todo</button>

   </div>)
}
