import React from 'react'
import { NavLink,Route,Routes } from 'react-router-dom'
import Store from './Component/store'
import Home from './Component/Home'
import Portfolio from './Component/Portfolio'
Portfolio


function App() {
  return (
   < >
     
  <nav className='w-full  '>
    <div className='w-[50%] bg-gray-200 h-15 mt-7 text-center flex justify-center ml-[25%] rounded-xl gap-[25%]'>
  <NavLink style={(e)=>{
    return{
      color: e.isActive ? "white":"",
      backgroundColor: e.isActive ?"gray":""
    }
  }} className=' px-5 py-2 font-semibold text-xl rounded-lg ' to="./">Home</NavLink>
   <NavLink  style={(e)=>{
    return{
      color: e.isActive ? "white":"",
      backgroundColor: e.isActive ?"gray":""
    }
  }}  className=' px-5 py-2 font-semibold text-xl rounded-lg ' to="./PORTFOLIO">Portfolio</NavLink>
   <NavLink style={(e)=>{
    return{
      color: e.isActive ? "white":"",
      backgroundColor: e.isActive ?"gray":""
    }
  }}  className='px-5 py-2 font-semibold text-xl rounded-lg ' to="./Contact">Contact</NavLink>
   </div>
   </nav>
   
   <Routes>
   <Route  path="/" element={<Home />} />
      <Route path="/Contact" element={<Store />} />
      <Route path="/PORTFOLIO" element={<Portfolio />} />
      
    </Routes>
      

   </>

    
  )
}

export default App