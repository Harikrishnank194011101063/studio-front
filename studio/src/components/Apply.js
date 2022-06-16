import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';



function Apply(props) {
  let navigate = useNavigate();
// console.log(props);


let[name,setname]=useState("");
let[mobile,setmobile]=useState("");
let[gmail,setgmail]=useState("");
let[time,settime]=useState("");
let[endtime,setendtime]=useState("")

let[date,setdate]=useState("")
const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
const nameRef = useRef();
const gmailRef = useRef();
const mobileRef = useRef();
const timeRef = useRef();
    const endtimeRef = useRef();
   




let handleSubmit = async(e) =>{
  e.preventDefault()

  const newUser ={
     name:name,
      gmail: gmail,
     mobile:mobile,
 
     time:time,
     endtime:endtime,
   
 
    };
console.log("this",newUser)

  try {
      await axios.post("http://localhost:4101/apply", newUser);
   
   
      
   
   
   
   
   
   
    console.log(newUser);
      setError(false)
      setSuccess(true);
  } catch (error) {
      setError(true);
  }
}; 










const arrraypusher=()=>{
  
let occupieddata={name,mobile,gmail,time,date,endtime}
let addtodata=[...props.value.occupied]
addtodata.push(occupieddata)
props.value.setoccupied(addtodata)




navigate("/aboutus")
}





  return (
    <div class="d-flex justify-content-center">
      {/* <ul><li>this page will have a form with timing optioner</li>
      <li>name mobile number alternative mobile number,your timing ,what you need this studio for</li> */}
    <div className='form'>
      <Form onSubmit={(e)=>handleSubmit(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <center><Form.Label>NAME</Form.Label></center>
    <Form.Control type="text" placeholder="Enter NAME" onChange={(e)=>setname(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <center> <Form.Label>MOBILE</Form.Label></center>
    <Form.Control type="number" maxLength='10'  placeholder="Enter contact number" onChange={(e)=>setmobile(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
   <center> <Form.Label>GMAIL</Form.Label></center>
    <Form.Control type="gmail" placeholder="Enter gmail" onChange={(e)=>setgmail(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <center><Form.Label>TIME</Form.Label></center>
    <Form.Control type="time" placeholder="Enter start  time" onChange={(e)=>settime(e.target.value)}/>
    <Form.Control type="time" placeholder="Enter end time" onChange={(e)=>setendtime(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <center><Form.Label>date</Form.Label></center>
    <Form.Control type="date" placeholder="Enter start  time" onChange={(e)=>setdate(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>



  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
      </div>
   
    </div>
  )
}


export default Apply
