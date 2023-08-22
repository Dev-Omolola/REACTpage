import React from 'react';
import { Link } from 'react-router-dom';

const style={
    div:{
        width:"280px",
        textAlign:"start",
        padding:"20px",
        // border: "1px solid blue",
        // fontWeight: 600
    }
}
const Study = () => {
  return (
    <div style={{padding: "50px 0", backgroundColor:"rgb(230,230,231)"}}>
        <h1>
           Why study at SQI?
        </h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}} className='container'>
            <div style={style.div}>
                <i class="icofont-laptop"></i>
                 <div>
                     <h5>
                        Project Based Learning
                     </h5>
                     <p>
                        Our courses are practical, hands-on learning. Practice and apply knowledge faster with real-world Web Development projects you can show off.
                     </p>
                  </div>
            </div>
            <div style={style.div}>
                <div></div>
                <div>
                    <h5>Expert instructors</h5>
                    <p>Get to interact with different mentors and draw from their loads of experience.</p>
                </div>
            </div>
            <div style={style.div}>
                <div></div>
                <div>
                    <h5>Physical and virtual class</h5>
                    <p>You can now choose physical class experience or online classroom and learn from anywhere in the world.</p>
                </div>
            </div>
            <div style={style.div}>
                <div></div>
                <div>
                    <h5>Free access to our hub and communities</h5>
                    <p>You will have access to our fully functional hub for co-working and working on projects, assignments and even begin a start-up</p>
                </div>
            </div>
            <div style={style.div}>
                <div></div>
                <div>
                    <h5>Job opportuniy</h5>
                    <p>78.5% of our students found secure employment within three months of graduation. Students leave from learning to getting job roles</p>
                </div>
            </div>
            <div style={style.div}>
                  <div></div>
                  <div>
                      <h5>Alumni Support</h5>
                      <p>Our students have access to alumni who currently work at top tech organizations in the world such as Google, Microsoft, Interswitch etc.</p>
                  </div>
            </div>
            <div style={style.div}>
                  <div></div>
                  <div>
                    <h5>Certification</h5>
                    <p>Be certified by an accredited and globally recognized institution. SQI got its accreditation in Sept 2021 from the NBTE, Nigeria.</p>
                  </div>
            </div>
            <div style={style.div}>
                  <div></div>
                  <div>
                    <h5>Access to study materials</h5>
                    <p>Students have access to prerecorded videos and resources they can make use of to further solidify their knowledge.</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Study