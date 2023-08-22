import React from 'react'


const style={
  div:{
    width:"170px",
    textAlign:"start"
  }
}

const Footer = () => {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", padding:"50px 0"}} className='container'>
         <div style={style.div}>
          <p style={{color:"rgb(0,32,138)", fontWeight:"700", fontSize:"20px"}}>Hello, We are SQI college of ICT</p>
          <p>We provide and lead others in quality ICT education.</p>
         </div>
         <div style={style.div}>
            <p style={{fontWeight:"700", fontSize:"20px"}}>Quick Links</p>
            <p>Application Portal </p>
            <p>Student Portal</p> 
             <p>Professional Courses</p> 
             <p>NID Courses</p>
              <p>Campus Info</p>
         </div>
         <div style={style.div}>
            <p style={{fontWeight:"700", fontSize:"20px"}}>Ogbomoso</p>
            <p>Old Ilorin Road,
                Opposite Yoaco Filling Station,
                Yoaco, Ogbomoso.
             </p>
             <p>
              0906 281 9991, 0906 281 9993
             </p>
         </div>
         <div style={style.div}>
             <p style={{fontWeight:"700", fontSize:"20px"}}>Ibadan</p>
             <p>First Floor, H25 Heritage Mall,
                Opposite Central Bank of Nigeria,
                Dugbe, Ibadan.
              </p>
              <p>
                  Christianah Oyinade Ajoke House, beside First Bank, Arisekola Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo road, Ibadan.
              </p>
         </div>
         <div style={style.div}>
          <p style={{fontWeight:"700", fontSize:"20px"}}>Abeokute</p>
          <p>First floor, OPIC Tower building, Okeilewo, Abeokuta.</p>
         </div>
      </div>
      <div style={{backgroundColor:"rgb(5,0,68)", color:"white", padding:"5px", textAlign:"start"}}>
          <p className='container'>Copyright © 2023 | SQI ICT Consultants. All Rights Reserved.</p>
      </div>
    </div>  
  )
}

export default Footer