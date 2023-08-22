import React from 'react'
 
const style={
  bgmain:{
       padding:"50px 0"
  },
   bgmain:{
    backgroundImage:`linear-gradient(120deg,rgba(0,4,66,0) 0%,#000442 70%), url("https://edu.sqi.ng/wp-content/uploads/2020/08/DSC_9054-scaled.jpg")`,
    width:"100%", 
    height:"80vh", 
    backgroundSize:"cover", 
    backgroundRepeat:"no-repeat", 
    backgroundPosition:"center",
    display:"flex",
    alignItems:"center"
  
   },
   bgsection:{
       width:"60%",
       textAlign:"start",
       marginLeft:"auto",
       padding:"0 80px",
       color:"white"
   }
}

const Bgpage = () => {
  return (
    <div style={style.bgmain}>
        <div style={style.bgsection}>
            <h3>SCICT AT A GLANCE</h3>
            <p>SQI College of ICT offers both National Diploma and Professional Certificate programmes.</p>
            <p>The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.</p>
            <p>You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
        </div>     
    </div>
  )
}

export default Bgpage