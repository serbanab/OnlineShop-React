import React from 'react';
import Layout from '../../components/Layout/Layout';
import "./About.css";
import Seling from "../../assets/images/Seling.jpg"
import haine from "../../assets/images/haine.webp";

function About() {
    return(
        <div className = "about" >
            <Layout>
               <div className = "container" >
                   <div className = " row "  >
                       <div className = "col-8 p-0" >
                           <h1 className = "title " >CorinthShop Business Review</h1>
                       </div>
                       <div className = "col-4 ps-5  " >
                           <h2 className = "m-0 ">
                                Seling the <br/>
                                World's <br/>
                                Best <br/>
                                Clothes <br/>
                                at the <br/>
                                Best <br/>
                                Price 
                           </h2>
                       </div>
                       <div className = "col-12 mt-4" >
                           <img src={Seling} alt="" className = "main-imgs" />
                           <img src={haine} alt="" className = "main-imgs" />
                       </div>
                       <div className = "col-12 about-us mt-4 mb-5 " >
                           <h1 className = "text-center" >About Us</h1>
                       </div>
                       <div className = "col-6  mb-5 p-0 motto  d-flex flex-column justify-content-center " >
                           <h1>
                           A best seller platform <br/> 
                           for your ideas.
                           </h1>
                           <div> <h1>
                           Subscribe to Our Newsletter
                           </h1>
                           <div  className = " border input-container mt-4" >
                               <form action="" className = "d-flex py-5 px-2  " >
                                   <input type="text" className = "form-control text-white  " placeholder = "Enter your email here " />
                                   <button className = "btn btn-success px-4 rounded-1 "   >Subscribe</button>
                               </form>
                           </div>
                           </div>
                            <div>
                            </div>
                       </div>
                       <div className = "col-6 mb-5 p-0 " >

                           <p className = "lead" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vitae 
                               quam cum rem tempore magnam dolorum! Dolor, nesciunt sint! 
                               Illo, quia quos cupiditate praesentium minus officia nostrum tenetur a quo!
                               </p>

                               <p className = "lead " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vitae 
                               quam cum rem tempore magnam dolorum! Dolor, nesciunt sint! 
                               Illo, quia quos cupiditate praesentium minus officia nostrum tenetur a quo!
                               </p>

                               <p className = "lead" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vitae 
                               quam cum rem tempore magnam dolorum! Dolor, nesciunt sint! 
                               Illo, quia quos cupiditate praesentium minus officia nostrum tenetur a quo!
                               </p>

                               <p className = "lead" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, vitae 
                               quam cum rem tempore magnam dolorum! Dolor, nesciunt sint! 
                               Illo, quia quos cupiditate praesentium minus officia nostrum tenetur a quo!
                               </p>

                               <p className = "lead" >Thank you for reading.</p>

                       </div>
                   </div>
               </div>
            </Layout>
        </div>
    );
}

export default About;