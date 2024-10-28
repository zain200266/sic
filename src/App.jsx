import { Button, Stack, TextField } from '@mui/material'


import './App.css'
import { useState } from 'react'


function App() {
  const[principle,setPrinciple]=useState(0)
  const[Interest,setInterest]=useState(0)
  const[Year,setyear]=useState(0)
  const[SimpleIntrest,setSimpleIntrest]=useState(0)


  const[isInvalidPrinciple,setisInvalidPrinciple]=useState(false)
  const[isInvalidInterest,setisInvalidInterest]=useState(false)
  const[isInvalidYear,setisInvalidYear]=useState(false)
  const[isInvalidSimpleIntrest,setisInvalidSimpleIntrest]=useState(false)


  console.log(principle);
  console.log(Interest);
  console.log(Year);
  
  

const ValidateUserInput=(tag)=>{
  const{name,value}=tag
  console.log(name,value);
  console.log(typeof value);
console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
if(!!value.match(/^[0-9]*.?[0-9]+$/)){
  if(name=='principle'){
    setPrinciple(value)
    setisInvalidPrinciple(false)
  }
  else if(name=='Interest'){
    setInterest(value)
    setisInvalidInterest(false)

  }
  else
  setyear(value)
  setisInvalidYear(false)

  
  

}
else{
  if(name=='principle'){
    setisInvalidPrinciple(true)
    
  }
  else if(name=='Interest'){
    setisInvalidInterest(true)

  }
  else{
    setisInvalidYear(true)
  }
}
  
  

}

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");
   
    if(principle && Interest && Year){
      setSimpleIntrest(principle*Interest*Year/100)
    }
    else{
      alert("enter the field completly")
    }
    
  }


const handleReset=()=>{
  setPrinciple(0)
  setInterest(0)
  setyear(0)
  setSimpleIntrest(0)
  setisInvalidInterest(false)
  setisInvalidPrinciple(false)
  setisInvalidYear(false)
}



  return(
   <div className='bg-dark d-flex align-item-center justify-content-center p-3'>
<div className='bg-light rounded p-3' style={{minHeight:"80vh", minWidth:"60vh"}}>
  <h2>Simple Interest Calculator</h2>
  <p>Calculate Your Simple Interest Easily</p>
  <div className='bg-warning rounded p-4' style={{minHeight:"18vh"}}>
<h1 className='text-center'>{SimpleIntrest}</h1>
<h4>Total Simple Interest</h4>

  </div>
  <form action="">
  <div className='mb-3 mt-3'>
  <TextField name="principle" onChange={e=>ValidateUserInput(e.target)} value={principle ||""} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
  </div>
  { isInvalidPrinciple &&
    <p className='text-danger'> Invalid Principle</p>
  }
 
  <div className='mb-3 '>
  <TextField name="Interest" onChange={e=>ValidateUserInput(e.target)} value={Interest ||""} className='w-100' id="outlined-basic" label="Rate Of Interest(p,a)%" variant="outlined" />
  </div>
  { isInvalidInterest &&
    <p className='text-danger'> Invalid interest</p>
  }
  <div className='mb-3'>
  <TextField name="year"  onChange={e=>ValidateUserInput(e.target)} value={Year ||""} className='w-100' id="outlined-basic" label="Time Period(yr)" variant="outlined" />
  </div>
  { isInvalidYear &&
    <p className='text-danger'> Invalid Year</p>
  }
  <Stack direction="row" spacing={2}>
  <Button type='submit' disabled={isInvalidInterest || isInvalidPrinciple || isInvalidYear} onClick={handleCalculate} variant="contained" style={{background:'black',width:'50%',height:'50px'}}>Calculate</Button>
  <Button variant="outlined"  onClick={handleReset}  style={{background:'',width:'50%',height:'50px'}}>Reset</Button>
</Stack>
 
</form>

</div>

   </div>   
  )
}

export default App