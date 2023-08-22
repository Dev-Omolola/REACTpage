import React from 'react'

const style={
  div:{
    backgroundColor:"rgb(240,250,255)",
    height:"115vh",
    display:"flex",
    alignItems: "center"
  },
  pt:{
    fontSize:"25px"
  },
  ht:{
    fontSize:"20px",
    fontWeight:"600"
  }

}

const vision = () => {
  return (
    <div style={style.div}>
      <div className='container' style={{display:"flex"}}>
        <div style={{ display:"flex", justifyContent:"start", width:"800px"}}>
          <img src={require("../Images/sqi-graduate1.jpg")} alt=""  style={{width:"90%", height:"95%"}}/>
        </div>
        <div style={{width:"350px", textAlign:"start"}}>
              <h4 style={{fontWeight:"700", fontSize:"40px"}}>
                   Making Africa a Tech Continent…
              </h4>
              <p style={{fontSize:"16px", fontWeight:"400", color:"rgb(102,102,102)"}}> 
                  We focus on quality teaching, learning and training to the globally acceptable productivity standard in accordance with the requirements of the industry, for which necessary research and preparation of courses are ensured to make industry-ready professionals.
              </p>
              <p style={{fontSize:"16px", fontWeight:"400", color:"rgb(102,102,102)"}}>
                  SQI College of ICT is closely watching the interaction of industry and academia, getting feedback from our industry partners to provide the needed training while concentrating to contribute industry needed professionals in a very flexible study structure.
              </p>
        </div>
      </div>

    </div>
  )
}

export default vision