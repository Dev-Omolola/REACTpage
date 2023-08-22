import React from 'react'

const Top = () => {
  return (
    <div>
        <div style={{height:"250vh", display:"flex", justifyContent:"space-evenly", padding:"50px 0"}} className='container'>
           <div style={{width:"40%", height:"100%"}}>
               <h1>Our Top Courses</h1>
               <p>Take a look at some of our popular courses</p>
               <a>view all courses</a>
              <div style={{boxShadow:"5px 5px 20px #D2EAD7", width:"100%", height:"600px", backgroundColor:"#D5EAF3", borderRadius:"30px", padding:"30px"}}>
                  <img src={require("../Images/software-engineering-630x330-1 (1).webp")} alt=""  style={{width:"85%", height:"40%", borderRadius:"15px"}}/>
                  
              </div>
              <div style={{boxShadow:"5px 5px 15px #D2EAD7", margin:"20px", width:"100%", height:"600px", borderRadius:"30px", backgroundColor:"#E0D5C0", padding:"30px"}}>
                  <img src={require("../Images/product (1).jpg")} alt=""  style={{width:"85%", height:"40%", borderRadius:"15px"}}/>
                    
              </div>
           </div>
           <div style={{width:"40%"}}>
              <div style={{boxShadow:"10px 10px 20px #FFE3DE", border:"1px solid black", width:"100%", height:"40%", backgroundColor:"#EEEFBD", borderRadius:"30px", padding:"30px"}}>
                <img src={require("../Images/DATA-SQI (1).jpg")} alt=""  style={{width:"85%", height:"40%", borderRadius:"15px"}}/>
                  

              </div>
              <div style={{boxShadow:"10px 10px 20px #FFE3DE", border:"1px solid black", width:"100%", backgroundColor:"#DFD5E8", height:"40%", borderRadius:"30px", margin:"20px 0", padding:"30px"}}>
                  <img src={require("../Images/digital-literacy (1).jpg")} alt=""  style={{width:"85%", height:"40%", borderRadius:"15px"}}/>
                   
              </div>
           </div>
        </div>
    </div>
  )
}

export default Top