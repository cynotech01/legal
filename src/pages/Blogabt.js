import React from 'react'
import { useLocation } from 'react-router-dom';
function Blogabt() {
    const location = useLocation();

    // Access the passed data
    const data = location.state;
  return (
    <>
      <section id="service" className="services pt-0">
                <div className="container" >
       <div  >
                            <div className="card">
                                <div className="card-img">
                                    <img src={data.url} alt="" className="img-fluid" style={{height:"430px"}} />
                                </div>
                                <h3><span className="stretched-link">{data.head}</span></h3>
                                <p>{data.text}
                                </p>
                                
                            </div>
                            
                        </div>
                        </div>
                        </section>
    
    </>
  )
}

export default Blogabt