import {useState} from 'react';
import Display from './Display';
import Nav from '../components/Nav';
import "./Dashboard.css"
import TicketSubmit from './TicketSubmit';

const Dashboard = () => {

const [isScrolled, setIsScrolled] = useState(false);

window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (
        window.onscroll = null
    )
};

  return (
   
    <div className='container'>
    <Nav isScrolled={isScrolled}/>
    <Display/>
    <TicketSubmit/>
    </div>
  )
}

export default Dashboard