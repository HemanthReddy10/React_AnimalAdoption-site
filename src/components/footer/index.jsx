import React from "react";

const Footer = ({callBack}) => {
  return (
    
    <footer>
    <nav className="nav_footer">
        <ul className="footer_menu">
            <li className="item_footer">
                
                <button className="glow-on-hover" onClick={() => callBack("Privacy")}  >Privacy Policy</button>
            </li>
            <li className="item_footer">
                
                <button className="glow-on-hover" onClick={() => callBack("Terms")}  >Terms & Conditions</button>
            </li>
            <li className="item_footer">
                
                <button className="glow-on-hover" onClick={() => callBack("Contact")}  >Contact Us</button>
            </li>
        </ul>

    </nav>
</footer>
  );
};

export default Footer;
