// import React from 'react'
import {Link} from 'react-router-dom';
import "./Nav.css"

export default function Nav() {
  const links = [
    {name:"Dashboard", link:"/"},
    {name:"Submit a Ticket", link:"/ticketSubmit"},
    {name:"View Tasks", link:"/taskView"},
    {name:"Messages", link:"/messages"}
  ]

  return (
    <nav className='nav navStyle flex'>
        <div className='left flex a-center'>
            <div className='flex a-center j-center'>
                <ul className='links flex column'>
                    {
                    links.map(({name,link}) =>{
                        return (
                            <li key={name}>
                            <Link to={link}>{name}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}
