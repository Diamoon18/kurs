import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../contex/contexAuth.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link className='link' to="/"> Kurs. </Link>
        </div>
        <div className='links'>
          <Link className='link' to="/">
            <h6>Kursy</h6>
          </Link>
          <Link className='link' to="/onas">
            <h6>O nas</h6>
          </Link>
          
          {currentUser ? 
            (
              <>
                <span onClick={()=>{navigate('/');logout()}}> Logout </span> 
                {currentUser.role==="1" ? (
                  <span className='write'>
                    <Link className="link "to="/create">Create</Link>
                  </span> ):(
                    <span>
                      <Link className="link" to="/"> Hello, {currentUser.nickname}!</Link>
                    </span> 
                  )
                }
              </>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
