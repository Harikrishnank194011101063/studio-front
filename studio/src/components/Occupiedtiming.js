import React, { useState ,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


 
function Occupiedtiming(props) {
  console.log(props)









  

  let [data, setData] = useState(null);



  let url="http://localhost:4101/occupied"

  

useEffect(()=>{


  data= axios.get(url).then(function (response) {
   
      setData(response.data);
    
  })
  .catch(function (error) {
    console.error(error);
  });
  console.log("hii",data)
}, []);
  
  
  
  let getData = async () => {
    let result;
    try {
      result = await axios.get(url);
     return result.data;
  } catch (error) {
    result= error.response.data;
    return result;
  }
  };
  








  let handleDelete = async (i) => {
    await fetch(`${url}/${i}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getData();
      });
    }





  
  const fordelete=(i)=>{
    // inga i ya vaanganum params la potu so we can delete the stuffs by using the i in splice here
    let deletearray=[...props.value.occupied]
    deletearray.splice(i,1);
    props.value.setoccupied(deletearray)
    
  
  }
  
  
  
  return (
    <div>
      {/* this will be showed in a table  
      and it will add the limited information
      about their registering 
      like name gmail and timing they gave 
    */}



    
       
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>NAME</th>
      <th>MOBILE</th>
      <th>EMAIL</th>
      <th>OCCUPIED TIME(on railway time)</th>
      
  
    
  
    </tr>
  </thead>
  <tbody>
{data && data.data && data.data.map((e,i)=>{
    
    return <tr>
      <td >{i+1}</td>
      <td>{e.name}</td>
      <td>{e.mobile}</td>
      <td>{e.gmail}</td>
      <td>{e.time+"-"+e.endtime}</td>
      
    
    </tr>
})
}   
  </tbody>
</Table>
   <h1 >to cancel your reservation or change your shedule  <Link to={"/aboutus"}><button>contact us here</button></Link></h1>
   
   
   
   
   
   
   
    </div>
  )
}

export default Occupiedtiming
