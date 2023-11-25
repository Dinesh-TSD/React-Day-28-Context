import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import img from './cart.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import UserContext from '../context/userContext';

const Navbars = () => {

  const data=useContext(UserContext)

  return (
    <>

      <Navbar fixed='top'  expand="lg" className=" navs">
        <Container>
          <Navbar.Brand ><NavLink id='head' to={'/'}><div className="heading">DD <span>Electronics</span></div></NavLink>  </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='collap' id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className='navbar-home'>
                <li>
                  <NavLink id='page' to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink id='page' to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink id='page' to={"/order"}>Orders</NavLink>
                </li>

              </ul>
            </Nav>
          </Navbar.Collapse>
          <div >
            <NavLink id='head' to={"/cart"}>
              <button className='loginbtn'>
                <span><img src={img} alt="" /></span>
                <span >Cart</span>
                <span id='count'>{data.cart.length}</span>
              </button>
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars