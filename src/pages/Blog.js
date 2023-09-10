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
//Hi i am adding this
// git add .
// iff errors come then please git pull
// git commit -m "mesaage what you want"
// git push
// after pushing all things wait a minute
// npm run deploy

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
                                <h3><span className="stretched-link">{langType? "The Legal Revolution":'Den juridiske revolusjonen'}</span></h3>
                                <p>{langType? "The legal field is on the brink of a transformative revolution, fueled by the rapid advancements in technology, with Generative AI leading the way.As technology continues to evolve at an unprecedented pace, it is reshaping every facet of our lives...":"Det juridiske feltet står på randen av en transformerende revolusjon, drevet av raske fremskritt innen teknologi, med Generativ AI i spissen. Ettersom teknologien fortsetter å utvikle seg i et enestående tempo, omformer den alle aspekter av livene våre..."}.
                                </p>
                                <button class="button" onClick={() => handleClick(b1,'The Legal Revolution','The legal field is on the brink of a transformative revolution, fueled by the rapid advancements in technology, with Generative AI leading the way. As technology continues to evolve at an unprecedented pace, it is reshaping every facet of our lives, and the legal system is no exception. In this article, we delve into the realm of Generative AI and other trending technologies, exploring how they are poised to change the legal landscape forever.')}>
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
                                <h3><span className="stretched-link">{langType? "Predictive Analytics for Case Outcomes":'Prediktiv analyse for saksutfall'}</span></h3>
                                <p>{langType? "In the rapidly evolving landscape of the legal system, technology has been making substantial strides in transforming the way legal professionals approach their work. One such technological advancement...":"I det raskt skiftende landskapet av det juridiske systemet, har teknologi gjort betydelige fremskritt i å forandre måten juridiske fagfolk nærmer seg arbeidet sitt på. En slik teknologisk fremgang..............................."}.
                                </p>
                                <button class="button" onClick={() => handleClick(b2,'Predictive Analytics for Case Outcomes','In the rapidly evolving landscape of the legal system, technology has been making substantial strides in transforming the way legal professionals approach their work. One such technological advancement that is causing ripples of excitement and discussion is the use of Predictive Analytics for Case Outcomes. This innovative application of Artificial Intelligence (AI) and Machine Learning (ML) is reshaping the way legal decisions are made, offering a glimpse into a future where data-driven insights play a pivotal role in courtroom strategies.')}>
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
                                <h3><span className="stretched-link">{langType? "Virtual Legal Assistants and Chatbots":'Virtuelle juridiske assistenter og chatbots'}</span></h3>
                                <p>{langType? "In a world increasingly driven by technological innovations, the legal field is not exempt from embracing the advantages that technology offers. One of the latest trends making waves in the legal industry....":"I en verden som i økende grad drives av teknologiske innovasjoner, er ikke det juridiske feltet unntatt fra å omfavne fordelene som teknologien tilbyr. En av de nyeste trendene som gjør inntrykk i den juridiske bransjen..."}.
                                </p>
                                <button class="button" onClick={() => handleClick(b3,'Virtual Legal Assistants and Chatbots','In a world increasingly driven by technological innovations, the legal field is not exempt from embracing the advantages that technology offers. One of the latest trends making waves in the legal industry is the integration of Virtual Legal Assistants and Chatbots. These digital assistants are revolutionizing the way legal services are provided, offering convenience, efficiency, and accessibility to clients and legal professionals alike.')}>
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