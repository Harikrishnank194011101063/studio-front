import 'bootstrap/dist/css/bootstrap.min.css';
import Frontpage from "./components/Frontpage"
import Apply from "./components/Apply"
import Occupiedtiming from "./components/Occupiedtiming"
import Topbar from "./components/Topbar"
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Register from './components/Register';
import Cards from './components/Cards';

import './App.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState,useContext, useEffect } from 'react';



function App() {

  
  

let[occupied,setoccupied]= useState([{name:"vikram",mobile:"98765432",gmail:"vikram@gmail.com" ,time:"10:00",endtime:"12:00",date:"2022-07-02"}
,{name:"raj",mobile:"987635332",gmail:"rajam@gmail.com",time:"14:00",endtime:"15:00",date:"2022-05-02"}
,{name:"dheeraj",mobile:"78235432",gmail:"dheeraj@gmail.com" ,time:"15:00" ,endtime:"17:00",date:"2022-04-02"},{name:"vikram",mobile:"98765432",gmail:"vikram@gmail.com" ,time:"10:00",endtime:"12:00",date:"2022-07-02"},{name:"kamal",mobile:"98765432",gmail:"kamal@gmail.com" ,time:"01:00",endtime:"03:00",date:"2022-08-03"},

{name:"vijay",mobile:"98765432",gmail:"vijay08@gmail.com" ,time:"04:00",endtime:"06:00",date:"2022-08-10"},

{name:"alan",mobile:"98765432",gmail:"alan2022@gmail.com" ,time:"07:00",endtime:"09:00",date:"2022-05-21"},

{name:"karthi",mobile:"98765432",gmail:"karthi12@gmail.com" ,time:"11:00",endtime:"01:00",date:"2022-10-17"},

{name:"amir",mobile:"98765432",gmail:"amir@gmail.com" ,time:"03:00",endtime:"05:00",date:"2022-11-27"},

{name:"Jacob",mobile:"98765432",gmail:"jacob21@gmail.com" ,time:"08:00",endtime:"10:00",date:"2022-01-30"},

{name:"harini",mobile:"98765432",gmail:"harini1@gmail.com" ,time:"12:00",endtime:"02:00",date:"2022-05-05"},

{name:"andrea",mobile:"98765432",gmail:"andrea18@gmail.com" ,time:"07:00",endtime:"09:00",date:"2022-08-10"},

{name:"keerthi",mobile:"98765432",gmail:"keerthi007@gmail.com" ,time:"09:00",endtime:"11:00",date:"2022-02-23"},

{name:"jeeva",mobile:"98765432",gmail:"jeeva@gmail.com" ,time:"06:00",endtime:"08:00",date:"2022-03-15"}])



 















return <>

  <BrowserRouter>

       <Topbar/>
     
  <Routes>
<Route path="/frontpage" element={<Frontpage/>}/>
<Route path="/" element={<Frontpage/>}/>
<Route path="/apply" element={<Apply value={{occupied,setoccupied}}/>}/>
<Route path="/occupied" element={<Occupiedtiming  value={{occupied,setoccupied}} />}/>
<Route path="/aboutus" element={<Aboutus/>}/>
<Route  path="/register" element={<Register/>} />
<Route  path="/" element={<Login />} />
<Route  path="/cards" element={<Cards />} />
<Route  path="/login" element={<Login />} />
  </Routes>
  </BrowserRouter>
  







  </>
}

export default App;

  
  
  
  
  
  
  
  
  