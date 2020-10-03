import React from 'react';
import {AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import './footer.css';



function Footer() {
    return(
        <div className="footer">
            <ul>
                <li><a href="https://www.facebook.com/aryaksingh.chauhan.5/"> <AiFillFacebook color=" #000000" size={25}/> </a></li>
                <li><a href="https://www.instagram.com/aryaksinghchauhan/"> < AiFillInstagram color=" #000000"  size={25}/> </a></li>
                <li><a href="https://www.linkedin.com/in/aryak-singh-chauhan-663a74197/"> <AiFillLinkedin color=" #000000" size={25}/> </a></li>
                <li><a href="https://twitter.com/ChauhanAryak"> <AiFillTwitterCircle color=" #000000" size={25}/> </a></li>
            </ul>
            © 2020 developed by: Aryak singh chauhan
        </div>
    )
}


export default Footer;