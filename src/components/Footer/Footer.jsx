import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Hm} from "../../assets/icons/Hm.svg";
import {ReactComponent as Bershka} from "../../assets/icons/Bershka.svg";
import {ReactComponent as Emporioarmani} from "../../assets/icons/Emporioarmani.svg";
import {ReactComponent as Pullbear} from  "../../assets/icons/Pullbear.svg";
import {ReactComponent as Stradivarius} from "../../assets/icons/Stradivarius.svg";
import {ReactComponent as FaceBook} from "../../assets/icons/FaceBook.svg";
import {ReactComponent as Linkedin} from "../../assets/icons/Linkedin.svg";
import {ReactComponent as Twitter} from "../../assets/icons/Twitter.svg";
import {ReactComponent as Pinterest} from "../../assets/icons/Pinterest.svg";
import {ReactComponent as Instagram} from "../../assets/icons/Instagram.svg";

import './Footer.css';

function Footer() {
    return(
        
        <>
        <footer className = "mt-5 " >
        <div className = "px-5  pt-3" >
            <div className = "row  " >
                <div className = "col-4 d-flex justify-content-center text-center" > 
                <div  >
                    <h4>Linkuri Rapide</h4>
                    <Link to = "/about" >
                        <h5>About</h5>
                    </Link> 
                    <Link to = "/terms&&conditions" >
                        <h5>Termeni&Conditii</h5>
                    </Link>
                    <Link to = "/" >
                    <h5>Schimburi si retur</h5>
                    </Link>
                    <Link to = "/" >
                        <h5>Securitatea datelor</h5>
                    </Link>
                    <Link to = "/" >
                    <h5>Feedback site</h5>
                    </Link>
                    </div>
                </div>

                <div className = "col-4 d-flex justify-content-center text-center " >
                    <div  >

                    <h4>Companii Partenere</h4>

                        <a href="https://www2.hm.com/ro_ro/index.html">
                            <h5> H&M</h5>
                        </a>
                        <a href="https://www.bershka.com/ro/">
                            <h5>Bershka</h5>
                        </a>
                        <a href="https://www.armani.com/en-us/experience/emporio-armani">
                             <h5>Armani</h5>
                         </a>
                        <a href="https://www.pullandbear.com/ro/">
                             <h5>PULL&BEAR</h5>
                        </a>
                        <a href="https://www.stradivarius.com/ro/">
                             <h5>Stradivarius</h5>
                        </a> 
                    </div>
                </div>

                <div className = "col-4 d-flex justify-content-center text-center " >
                    <div >
                    <h4>Follow us on :</h4>
                    <a href=""> <h5 className = "" > <FaceBook className = "svg-social " id = "face-book"  /> <span >Facebook</span> </h5> </a>
                    <a href=""><h5> <Linkedin className = "svg-social" id = "in" /> LinkedIn</h5></a>
                    <a href=""><h5> <Twitter className = "svg-social" id = "twitter" /> Twitter</h5></a>
                    <a href=""><h5> <Pinterest className = "svg-social" id = "pin" />  Pinterest</h5></a>
                    <a href=""><h5> <Instagram className = "svg-social" id = "instagram" /> Instagram</h5></a>
                    </div>
                </div>

                <div className = "col-12 d-flex justify-content-around mt-3" >
                   <Hm/>
                   <Bershka />
                   <Emporioarmani/>
                   <Pullbear/>
                   <Stradivarius/>
                </div>

                <div className = "col-12 pt-3 text-center d-flex justify-content-center " id = "last">
                    <h6 className = "align-self-center" >Copyright © 2022 CorinthShop - IMBRACAMINTE SI INCALTAMINTE</h6>
                </div>
             </div>
            </div> 
            </footer>
        </>
       
    )
}

export default Footer;