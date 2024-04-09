import React, { FC } from "react"; 
import "../styles/Header.css";


interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="header">
    <div className="logo-text">TODO APP</div>
  </div>
);

export default Header;
