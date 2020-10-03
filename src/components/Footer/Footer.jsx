import React from 'react';
import {AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import './footer.css';



function Footer() {
    return(
        <div className="footer">
            <ul>
                <li><a href="https://www.facebook.com/aryaksingh.chauhan.5/" target="_blank"  rel="noopener noreferrer" > <AiFillFacebook color=" #000000" size={25}/> </a></li>
                <li><a href="https://www.instagram.com/aryaksinghchauhan/" target="_blank"  rel="noopener noreferrer" > < AiFillInstagram color=" #000000"  size={25}/> </a></li>
                <li><a href="https://www.linkedin.com/in/aryak-singh-chauhan-663a74197/" target="_blank"  rel="noopener noreferrer" > <AiFillLinkedin color=" #000000" size={25}/> </a></li>
                <li><a href="https://twitter.com/ChauhanAryak" target="_blank"  rel="noopener noreferrer" > <AiFillTwitterCircle color=" #000000" size={25}/> </a></li>
            </ul>
            © 2020 developed by: Aryak singh chauhan
        </div>
    )
}


export default Footer;