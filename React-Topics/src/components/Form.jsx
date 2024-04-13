import React from 'react'
import { useState } from 'react'

const Form = () => {
const d = [
    {age:1,name:"arush"},
    {age:2,name:"ankit"}
]
const [data,setData]= useState(d)
const[form,setForm] = useState({name:'',age:''})

const changeHandler = (e) =>{
setForm({...form,[e.target.name]:e.target.value})
}

const submitHandler= (e) =>{
    e.preventDefault()
   setData([...data,{name:form.name,age:form.age}])
   setForm({name:'',age:''})
   console.log([...data,{name:form.name,age:form.age}])
    }
    

  return (
    <div>
     <form onSubmit={submitHandler}> 
      Name:  <input type="text" name="name" value={form.name} onChange={changeHandler}></input>
      Age:  <input type="text" name="age" value={form.age} onChange={changeHandler}></input>
       <button type='submit'>Add</button>
     </form>
    {
        data.map((item,index)=>{
            return(
            <div key={index}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            </div>)
        })
    }
    </div>
  )
}

export default Form
