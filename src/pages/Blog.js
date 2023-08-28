// import React from 'react'
// import b1 from "../assets/img/b1.jpg";
// import b2 from "../assets/img/b2.jpg";
// import b3 from "../assets/img/b3.jpg";
// function Blog(props) {
//     const {langType,setLangType}=props;
//     return (
//         <div>
//             <section id="service" className="services pt-0">
//                 <div className="container" >

//                     <div className="section-header">
//                         {/* <span>{langType?"Blogs":'Blogg'}</span> */}
//                         <h2>{langType?"Blogs":'Blogg'}</h2>

//                     </div>

//                     <div className="row gy-4">

//                         <div className="col-lg-4 col-md-6"  >
//                             <div className="card">
//                                 <div className="card-img">
//                                     <img  src={b1} alt="" className="img-fluid" />
//                                 </div>
//                                 <h3><span className="stretched-link">{langType?"Advanced Analysis":'Avansert analyse'}</span></h3>
//                                 <p>{langType?"LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances":"LegalMatch bruker toppmoderne språkmodeller og naturlig språkbehandling for å analysere detaljene i saken din, ekstrahere viktig informasjon og forstå dens nyanser."}.
//                                 </p>
//                             </div>
//                         </div>
//                         {/* <!-- End Card Item --> */}


//                         <div className="col-lg-4 col-md-6"  >
//                             <div className="card">
//                                 <div className="card-img">
//                                     <img  src={b1} alt="" className="img-fluid" />
//                                 </div>
//                                 <h3><span className="stretched-link">{langType?"Advanced Analysis":'Avansert analyse'}</span></h3>
//                                 <p>{langType?"LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances":"LegalMatch bruker toppmoderne språkmodeller og naturlig språkbehandling for å analysere detaljene i saken din, ekstrahere viktig informasjon og forstå dens nyanser."}.
//                                 </p>
//                             </div>
//                         </div>
//                         {/* <!-- End Card Item --> */}
//                         <div className="col-lg-4 col-md-6" >
//                             <div className="card">
//                                 <div className="card-img">
//                                     <img  src={b1} alt="" className="img-fluid" />
//                                 </div>
//                                 <h3><span className="stretched-link">{langType?"Advanced Analysis":'Avansert analyse'}</span></h3>
//                                 <p>{langType?"LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances":"LegalMatch bruker toppmoderne språkmodeller og naturlig språkbehandling for å analysere detaljene i saken din, ekstrahere viktig informasjon og forstå dens nyanser."}.
//                                 </p>
//                             </div>
//                         </div>
//                         {/* <!-- End Card Item --> */}








//                     </div>

//                 </div>
//             </section>



//         </div>
//     )
// }

// export default Blog

import React from 'react'
import b1 from "../assets/img/b1.jpg";
import b2 from "../assets/img/b2.jpg";
import b3 from "../assets/img/b3.jpg";
import "../assets/css/button.css"
import {useNavigate} from 'react-router-dom';

function Blog(props) {
    const {langType,setLangType}=props;
    const navigate=useNavigate();
    const handleClick=(imgurl,head,text) => {
        // Pass data through navigate function
        navigate('/blogabt',{state: {url: imgurl,head: head,text: text}});
    };
    return (
        <div>
            <section id="service" className="services pt-0">
                <div className="container" >

                    <div className="section-header">
                        {/* <span>{langType?"Blogs":'Blogg'}</span> */}
                        <h2>{langType? "Blogs":'Blogg'}</h2>

                    </div>

                    <div className="row gy-4">

                    <div className="col-lg-4 col-md-6"  >
                            <div className="card">
                                <div className="card-img">
                                    <img src={b1} alt="" className="img-fluid blogfic" />
                                </div>
                                <h3><span className="stretched-link">{langType? "Advanced Analysis":'Avansert analyse'}</span></h3>
                                <p>{langType? "LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances":"LegalMatch bruker toppmoderne språkmodeller og naturlig språkbehandling for å analysere detaljene i saken din, ekstrahere viktig informasjon og forstå dens nyanser."}.
                                </p>
                                <button class="button" onClick={() => handleClick(b1,'Advanced Analysis','LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances')}>
                                    Read More
                                    <div class="hoverEffect">
                                        <div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        {/* <!-- End Card Item --> */}


                        <div className="col-lg-4 col-md-6"  >
                            <div className="card">
                                <div className="card-img">
                                    <img src={b2} alt="" className="img-fluid blogfic" />
                                </div>
                                <h3><span className="stretched-link">{langType? "Advanced Analysis":'Avansert analyse'}</span></h3>
                                <p>{langType? "LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances":"LegalMatch bruker toppmoderne språkmodeller og naturlig språkbehandling for å analysere detaljene i saken din, ekstrahere viktig informasjon og forstå dens nyanser."}.
                                </p>
                                <button class="button" onClick={() => handleClick(b2,'Advanced Analysis','LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances')}>
                                    Read More
                                    <div class="hoverEffect">
                                        <div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        {/* <!-- End Card Item --> */}
                        <div className="col-lg-4 col-md-6"  >
                            <div className="card">
                                <div className="card-img">
                                    <img src={b3} alt="" className="img-fluid blogfic" />
                                </div>
                                <h3><span className="stretched-link">{langType? "Advanced Analysis":'Avansert analyse'}</span></h3>
                                <p>{langType? "LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances":"LegalMatch bruker toppmoderne språkmodeller og naturlig språkbehandling for å analysere detaljene i saken din, ekstrahere viktig informasjon og forstå dens nyanser."}.
                                </p>
                                <button class="button" onClick={() => handleClick(b3,'Advanced Analysis','LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances')}>
                                    Read More
                                    <div class="hoverEffect">
                                        <div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        {/* <!-- End Card Item --> */}








                    </div>

                </div>
            </section>



        </div>
    )
}

export default Blog