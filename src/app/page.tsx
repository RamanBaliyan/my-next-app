"use client"
import { Snippet } from 'next/font/google'
import React, { useState } from 'react'

const page = () => {
  const [title,settitle]=useState(" ")
  const [desc,setdesc]=useState(" ");
  const [maintask,setMaintask]=useState([]);
  const submitHandler = (e)=>{
   e.preventDefault();
   setMaintask([...maintask, {title,desc}]);
   console.log(maintask)
  
   settitle("")
   setdesc("")
  }
  const deletehandler = (i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setMaintask(copytask)


  }
  let rendertask= <h2> no task available </h2>;
  if(maintask.length>0){
      rendertask = maintask.map((t,i)=>{
  return (
    <li key={i} className = 'flex items-center justify-between m-8'>
      <div className="flex justify-between mb-5 w-1/2">
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='text-xl font-semibold'>{t.desc}</h6>
    </div>
    <button onClick={
      ()=>{
        deletehandler(i)
      }
    }
    className='bg-red-400 text-white p-6 border-black-400'>
      Delete</button>
    </li>
 );
});
  }
  
  return (
    <>
     <h1 className='bg-black text-white p-5 text-5xl font-bold
      text-center'>My Todo's list</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800
         border-2 m-8 px-4 py-2'
         placeholder="Enter the title here "
         value={title}
         onChange = { (e)=> {
          settitle(e.target.value)
         }}
         />
         <input type="text" className='text-2xl border-zinc-800
         border-2 m-8 px-4 py-2'
         placeholder="Enter the description"
         value={desc}
         onChange={ (e)=>{
          setdesc(e.target.value)
         }}
         />
         <button className='bg-black text-white corner-bounded font-bold border-zinc-800 border-2 m-8 py-2 px-8 text-2xl'>
      Add Task
      </button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>
          {rendertask}
        </ul>
      </div>
      
    </>
  )
}

export default page