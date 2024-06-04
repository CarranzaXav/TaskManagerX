import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Display.css";

function Display() {

  const [data,setData] = useState([])
  const [completed, setCompleted] = useState(true)
  useEffect(() =>{
    if(completed){
      setCompleted(false)
      axios.get('/tickets_tracked')
      .then((res) =>{
        setData(res.data)
      })
      .catch((err) => console.log(err))
    }
  }, [completed])

  function deptRename(department) {
    const departmentRename = {
      "itDepartment" : "- IT Department",
      "hrDepartment" : "- HR Department",
      "adminDepartment" : "- Admin Department"
    }
    return departmentRename[department] || department;
  }

  function truncate(str,n) {
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }

  return (
    <div>
     <div className='displayStyle'>
        <h1 className='title'>Bug Tracker Dashboard</h1>
        <div className='displayItems'>
            <div className='upcoming  border borderFirst'>
              <div className="fontHeader">
                Draft:
              </div>
              <div>
                {data.map((tickets_issued) =>{
                  return(
                  <div className='upcomingItem' key={tickets_issued.id}>
                    <div className='itemRow'>
                      <div className='ticketDes'>{truncate(tickets_issued?.description, 20)}</div>
                      <div className='ticketAssign'>{deptRename(tickets_issued.assign)}</div>
                    </div>
                    <div className='deleteBtn'>X</div>
                  </div>
                  )
                })}
              </div>
            </div>
            <div className="progress fontHeader border borderMid">In Progress</div>
            <div className="completed fontHeader border borderLast">Completed</div>
        </div>
    </div>
    </div>
  )
}

export default Display