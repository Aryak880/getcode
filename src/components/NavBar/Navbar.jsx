import React, {useState, useEffect} from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {RiMenuLine} from 'react-icons/ri';
import {ImCross} from 'react-icons/im';
import logo1 from './images/1.png';
import './navbar.css';


const LinkStyle = {
  textDecoration: "none",
  color: "#111111"
}

//path= dequeueusingcircularlinkedlist

const List = () => {
  return(
    <ul>
          <DropdownButton id="dropdown-item-button" title="Linked List">
            <Link to="/" style={LinkStyle}><Dropdown.Item as="button">Linked List</Dropdown.Item></Link>
            <Link to="/circularlinkedlist" style={LinkStyle}><Dropdown.Item as="button">Circular linked list</Dropdown.Item></Link>
            <Link to="/doublylinkedlist" style={LinkStyle}><Dropdown.Item as="button">Doubly Linked list</Dropdown.Item></Link>
            <Link to="/linkedlistwithheadernode" style={LinkStyle}><Dropdown.Item as="button">Link list with header node</Dropdown.Item></Link>
          </DropdownButton>

          <DropdownButton id="dropdown-item-button" title="Array List">
            <Link to="/arraylist" style={LinkStyle}><Dropdown.Item as="button" style={{minWidth: "250px"}}>Array list</Dropdown.Item></Link>
          </DropdownButton>

          <DropdownButton id="dropdown-item-button" title="Stack">
            <Link to="/stackusingarray" style={LinkStyle}><Dropdown.Item as="button">Stack using array</Dropdown.Item></Link>
            <Link to="/stackusinglinkedlist" style={LinkStyle}><Dropdown.Item as="button">Stack using linked list</Dropdown.Item></Link>
          </DropdownButton>

          <DropdownButton id="dropdown-item-button" title="Queue">
            <Link to="/queueusingarray" style={LinkStyle}><Dropdown.Item as="button">Queue using array</Dropdown.Item></Link>
            <Link to="/queueusingcirculararray" style={LinkStyle}><Dropdown.Item as="button">Queue using circular Array</Dropdown.Item></Link>
            <Link to="/queueusinglinkedlist" style={LinkStyle}><Dropdown.Item as="button">Queue using linked list</Dropdown.Item></Link>
            <Link to="/queueusingcircularlinkedlist" style={LinkStyle}><Dropdown.Item as="button">Queue using circular linked list</Dropdown.Item></Link>            
          </DropdownButton>

          <DropdownButton id="dropdown-item-button" title="Dequeue">
            <Link to="/dequeueusingcirculararray" style={LinkStyle}><Dropdown.Item as="button">Dequeue using circular array</Dropdown.Item></Link>
            <Link to="/dequeueusingcircularlinkedlist" style={LinkStyle}><Dropdown.Item as="button">Dequeue using circular linked list</Dropdown.Item></Link>
          </DropdownButton>
    </ul>
  )
}

const MobileList = () => {
  const [active, setactive] = useState(false);

  return(
    <div className="navMobile">
      <button className="mobileToggleButton" onClick={() => {
          setactive(!active)
        }}
      >
        {active ? <ImCross size={20}/>: <RiMenuLine size={30}/>}
      </button>
      {active && <List />}
    </div>
  )
}

function Navbar() {
  const [isMobile, setisMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setisMobile(window.matchMedia("(max-width: 768px)").matches)
    })
  });

  return (
      <div className="navContainer">
          <div className="logoContainer">
          <Link to="/" style={LinkStyle}>
              <img src={logo1} alt="Logo" style={{
                height: "80px",
                backgroundColor: "#F0F0F0"
              }}/>
          </Link>
          </div>
            
          <div className="navLinksContainer">
            {isMobile ? <MobileList /> : <List />}
          </div>
      </div>
  );
};


export default Navbar;