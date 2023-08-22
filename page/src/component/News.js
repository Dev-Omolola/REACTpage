import React from 'react';
import Button from '../component/Button'

const style={
    div:{
        width:"31%",
        
        // border:"1px solid black",
        textAlign:"start",
        backgroundColor:"white"
    },
    maindiv:{
        backgroundColor:"#F0F1FF",
        height:"140vh", 
        padding:"50px 100px" 
    }

}
const News = () => {
  return (
    <div style={style.maindiv}>
        <div style={{display:"flex", justifyContent:"space-between", padding:"40px 0"}} className='container'>
            <div>
                <h1>Latest News</h1>
            </div>
            <div>
                <Button/>
            </div>
        </div>
        <div className='container' style={{display:"flex", justifyContent:"space-between"}}>
            <div style={style.div}> 
                <img src={require("../Images/Scholarship-banner--400x250.jpg")} alt='' style={{width:"100%"}}/>               
                <p style={{fontWeight:"700", padding:"5px 20px"}}>SQI College of ICT Post-UTME Examination Date, and Change of Institution 2023</p>
                <small style={{padding:"0 20px", color:"orange", fontWeight:"700"}}>Jul 10, 2023</small>
                <p style={{padding:"5px 20px", fontSize:"15px", fontWeight:"600", color:"url(141,141,141)"}}>SQI College of ICT Post-UTME Examination Date, and Change of Institution We would like to inform you that the SQI Post-UTME Examination has been slated for July 29, 2023. This examination is a crucial step towards gaining admission into SQI College of ICT for the...</p>
            </div>
            <div style={style.div}> 
              <img src={require("../Images/comSci1-400x250.jpg")} alt='' style={{width:"100%"}}/>               
              <p style={{fontWeight:"700", padding:"5px 20px"}}>13TH SQI ICT Scholarship 2023</p>
              <small style={{padding:"0 20px", color:"orange", fontWeight:"700"}}>Jul 10, 2023</small>
              <p style={{padding:"5px 20px", fontSize:"15px", fontWeight:"600", color:"url(141,141,141)"}}>As technology continues to dominate various industries, the demand for professionals from diverse backgrounds who have upgraded their skills to meet market demands is on the rise. I hereby announce the launch of 2023 Scholarship. This year scholarship has been tagged:...</p>
            </div>
            <div style={style.div}> 
               <img src={require("../Images/sqijamb1-400x250.jpg")} alt='' style={{width:"100%"}}/>               
               <p style={{fontWeight:"700", padding:"0 20px"}}>Computer science in a nutshell</p>
               <small style={{padding:"5px 20px", color:"orange", fontWeight:"700"}}>Jul 10, 2023</small>
               <p style={{padding:"5px 20px", fontSize:"15px", fontWeight:"600", color:"url(141,141,141)"}}>Computer science is the study of how to use computers to solve problems. It is a vast and ever-evolving field, with new discoveries being made all the time. Computer scientists are the people who design, build, and maintain the computers that we use every day. They...</p>
            </div>
        </div>
    </div>
  )
}

export default News