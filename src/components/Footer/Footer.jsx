import React from 'react';
import {AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import './footer.css';



function Footer() {
    return(
        <div className="footer">
            
                
                <div className="contactform">Write me on: 
                    <a href="https://www.aryaksinghchauhan@gmail.com" target={'_blank'} 
                       style={{
                           textDecoration: 'none'
                       }}
                       rel="noopener noreferrer" > aryaksinghchauhan@gmail.com</a>
                </div>
            
            <ul>
                <li><a href="https://www.facebook.com/aryaksingh.chauhan.5/" target="_blank"  rel="noopener noreferrer" > <AiFillFacebook color=" #000000" size={25}/> </a></li>
                <li><a href="https://www.instagram.com/aryaksinghchauhan/" target="_blank"  rel="noopener noreferrer" > < AiFillInstagram color=" #000000"  size={25}/> </a></li>
                <li><a href="https://www.linkedin.com/in/aryak-singh-chauhan-663a74197/" target="_blank"  rel="noopener noreferrer" > <AiFillLinkedin color=" #000000" size={25}/> </a></li>
                <li><a href="https://twitter.com/ChauhanAryak" target="_blank"  rel="noopener noreferrer" > <AiFillTwitterCircle color=" #000000" size={25}/> </a></li>
            </ul>
            © 2020 developed by: <b style={{color: "#CC4A4A"}}>A</b>ryak Singh Chauhan 
        </div>
    )
}


export default Footer;
