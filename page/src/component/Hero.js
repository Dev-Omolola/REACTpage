import React from 'react';
import Button from './Button';


const style ={
      hero:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "30px"
              
      },
      // heroimg:{
      //  maxHeight: "300px",
      //  borderradius: "50px"
         
      // },
      imgg:{
        borderRadius: "0 0 30px 80px"
      },
      h1:{
        fontSize: "70px",
        fontWeight: "700",
        color: "rgb(26,0,82)",
      }, 
      herodiv:{
        textAlign: "start",
        // border: "1px solid black"
      }

}
const Hero = () => {
  return (
    <div style={{position:"relative"}}>
      <div className='hero container' style={style.hero}>
        <div className='herodiv' style={style.herodiv}>
          <h1 style={style.h1}>
             Study to become a global talent
          </h1>
          <p style={{fontSize:"18px", fontWeight: "600"}}>
              Learn new tech skills using world-class curriculum and top industry experts.
          </p>
          <Button/>
        </div>
        <div className='heroimg' style={style.heroimg}>
        {/* <img src={require("./Image/1.jpg")} alt=""/> */}

          <img src={require("../Images/sqimodel.png")} alt='' style={style.imgg}/>
        </div>
      </div>
      <div style={{padding:"20px", width:"65px", position:"fixed", height:"150px", left:"0", top:"200px", color:"white"}}>
         <div style={{backgroundColor:"#314A83", width:"100%", padding:"8px 25px 8px 20px"}}>
           <facebook/>
         </div>
         <div style={{backgroundColor:"#0092CC", width:"100%", padding:"8px 25px 8px 20px"}}>
            <twitter/>
         </div>
         <div style={{backgroundColor:"#0F699B", width:"100%", padding:"8px 25px 8px 20px"}}>I</div>
      </div>
    </div>
  )
}

export default Hero