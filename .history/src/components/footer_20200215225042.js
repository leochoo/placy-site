import React from "react";
import { Link } from "gatsby";
import footerStyles from "../styles/footer.module.scss";
const Footer = () => {
    return(
        <footer>
            <div>
                <ul>
                    <Link to="/about" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>about</small></li>
                    </Link>
                    <Link to="/careers" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>careers</small></li>
                    </Link>
                    <Link to="/consulting" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>consulting</small></li>
                    </Link>
                    <Link to="/contact" className={footerStyles.link}>
                        <li className={footerStyles.list}><small>careers</small></li>
                    </Link>
                </ul>
            </div>
            <div className={footerStyles.container}>
                <ul>
                    <li className={footerStyles.list}><small>Terms and Conditions</small></li> 
                    <li className={footerStyles.list}><small>Privacy Policy</small></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;