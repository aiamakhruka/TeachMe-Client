import "./Footer.scss";
import { Link } from "react-router-dom";

import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook-f.svg";
function Footer() {
  return (
    <footer className="footer">
      <Link to={"/"} className="footer__logo">
      T E A C H M E
      </Link>
      <p className="footer__copy-right">
        © 2023 TeachMe, All Rights Reserved.
      </p>
      <div className="footer__icons">
        <a href="https://twitter.com/"><img className="footer__icon" src={twitter} /></a>
        <a href="https://www.instagram.com/"><img className="footer__icon" src={instagram} /></a>
        <a href="https://www.facebook.com/"><img className="footer__icon" src={facebook} /></a>
      </div>
    </footer>
  );
}
export default Footer;
