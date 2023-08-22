import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Link } from 'react-router-dom';


const styles = {
    logo:{
        width:"60px",
    },
    con:{
      top: 0,
      // bottom:0,
      display:"flex",
      justifyContent:"space-between",
      position:"sticky",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", 
      zIndex: "1",
      backgroundColor:"white"

      // borderBottom: "1px solid red"
    }
  
}
const Navbar = () => {
  function drop(){
   document.getElementsByClassName("drop-down").style.display = "flex"
    // onMouseEnter={() => setIsShown(true)}
    // onMouseLeave={() => setIsShown(false)}>

  }
  return (  
      <div style={styles.con}>
       <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
             {/* <div style={{border:"1px solid red"}}>  */}
               <Link className='navbar-brand active' to="/">
                     <img src='https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg' alt='' style={styles.logo}/>
               </Link>
               {/* <a className="navbar-brand" href="#">
               </a> */}
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
              
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
                <li className="nav-item dropdown" onMouseOver={drop}>
                {/* onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}> */}
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Programmes
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Admission
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    E-portal
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SQI Scholarship</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">News</a>
                </li>
              </ul>
              
             <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
           </div>
         </div>
       </nav>
 </div>
  )
}

export default Navbar