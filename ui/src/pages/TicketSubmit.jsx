import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Nav from '../components/Nav';
import "./TicketSubmit.css";

function TicketSubmit() {
  const [values, setValues] = useState({
    name: '',
    description: '',
    assign: ''

  })

  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()

    axios.post('/ticket_submit', values).then((res) =>{

      navigate('/')
      console.log(res)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='formStyle'>
    <Nav/>
    <div className='ticketForm'>
      <h1 className='title'>Submit a Ticket</h1>
          <form className="formBox" onSubmit={handleSubmit}>
            <label className='formBoxTitle' htmlFor="ticketIssued">New Ticket:</label>
            <br/>
            <input type="text" className='formInputs formName' htmlFor="name" placeholder='Enter Name Here' required onChange={(e)=> setValues({...values, name: e.target.value})}/>
            <textarea 
            type="text" className='formInputs formDescription' htmlFor="description" id='ticketIssued' name="ticketIssued" placeholder='Please Explain your Issue in 500 characters or less' required
            onChange={(e) => setValues({...values, description:e.target.value})}
            ></textarea>
            <select name="ticketAssigned" id="ticketAssigned" className='formInputs formAssign' htmlFor="assign" defaultValue={"DEFAULT"} required onChange={(e) => setValues({...values, assign: e.target.value})}>
              <option value="DEFAULT" disabled hidden>Please Assign Dept</option>
              <option value="itDepartment">IT Dept.</option>
              <option value="hrDepartment">HR Dept.</option>
              <option value="adminDepartment">Admin Dept.</option>
            </select>
            <button type='submit' className='formSubmitBtn'>Submit</button>
          </form>
    </div>
    </div>
  )
}

export default TicketSubmit