import React, { FC } from "react";
import "../styles/Footer.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {currentYear} Patrycja Bochnak. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;