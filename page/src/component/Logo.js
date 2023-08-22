import React from 'react'

const style={
    imgLogo:{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      // border: "1px solid red"
    },
    img:{
      width: "150px"
    },
    div:{
      width: "250px",
      // border: "1px solid brown",
      padding: "30px 0"
    },
    classheader:{
       width: "600px",
      //  border: "1px solid red",
       textAlign: "start",
    }
}
const logo = () => {
  return (
    <div className='container' style={{padding:"50px 0"}}>
      <div style={style.classheader}>
          <h4 style={{ fontSize: "30px",fontWeight:"600"}}>
              Our alumni work at world-class companies around the world including
          </h4>
      </div>
        <div className='imgLogo' style={style.imgLogo}>
                <div style={style.div}>
                  <img src={require("../Images/Andela.png")} alt="" style={style.img}/>  
                </div>
                <div style={style.div}>
                     <img src={require("../Images/Interswitch.png")} alt="" style={style.img}/>
                </div>
                <div style={style.div}>
                   <img src={require("../Images/Microsoft_logo.png")} alt="" style={style.img}/>
                </div>
                <div style={style.div}>
                    <img src={require("../Images/Nigerian_Army.png")} alt='' style={style.img}/>
                </div>
                <div style={style.div}>
                  <img src={require("../Images/Paystack.png")} alt="" style={style.img}/>                       
                </div>
                <div style={style.div}>
                    <img src={require("../Images/Wema-Bank-Logo.png")} alt="" style={style.img}/>
                </div>
                <div style={style.div}>
                   <img src={require("../Images/aella-credit.png")} alt="" style={style.img}/>                   
                </div>
                <div style={style.div}>
                   <img src={require("../Images/brewery.png")} alt="" style={style.img}/>
                </div>
                <div style={style.div}>
                    <img src={require("../Images/clan-logo.png")} alt="" style={style.img}/>
                </div>
                <div style={style.div}>
                   <img src={require("../Images/edozzier.png")} alt="" style={style.img}/>
                </div>
                <div style={style.div}>
                    <img src={require("../Images/google.png")} alt="" style={style.img}/>
                </div>
                <div style={style.div}>
                    <img src={require("../Images/moneymie.png")} alt="" style={style.img}/>
                </div>
        </div>
    </div>
  )
}

export default logo