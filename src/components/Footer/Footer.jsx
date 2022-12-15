import React from 'react';
import {Link} from "react-router-dom";
import {AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import {RiContactsFill} from 'react-icons/ri';
import './footer.css';

const LinkStyle = {
    textDecoration: "none",
    color: "#f0f0f0"
  }

function Footer() {
    return(
        <div className="footer">
            
                <div className="contactform">
                    <Link to='/contactform' style={LinkStyle}><RiContactsFill color=" #f0f0f0" size={18}/> Send your feedback or any message</Link>
                </div>
                <div className="contactform">
                    <a href="https://documentaion-getcode.netlify.app/" 
                       style={{
                           textDecoration: 'none'
                       }}
                        >Documentation</a>
                </div>
            
            <ul>
                <li><a href="https://www.facebook.com/aryaksingh.chauhan.5/" target="_blank"  rel="noopener noreferrer" > <AiFillFacebook color=" #000000" size={25}/> </a></li>
                <li><a href="https://www.instagram.com/aryaksinghchauhan/" target="_blank"  rel="noopener noreferrer" > < AiFillInstagram color=" #000000"  size={25}/> </a></li>
                <li><a href="https://www.linkedin.com/in/aryak-singh-chauhan-663a74197/" target="_blank"  rel="noopener noreferrer" > <AiFillLinkedin color=" #000000" size={25}/> </a></li>
                <li><a href="https://twitter.com/ChauhanAryak" target="_blank"  rel="noopener noreferrer" > <AiFillTwitterCircle color=" #000000" size={25}/> </a></li>
            </ul>
            © 2020 developed by: Aryan Chaturvedi 
        </div>
    )
}


export default Footer;
