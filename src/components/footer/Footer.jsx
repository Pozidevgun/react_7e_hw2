import React from "react";
import Link from "../link/Link";
import styled from "./Footer.module.scss"
const Footer = ({ switchTheme }) => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <Link
            itemClass=""
            src="../../assets/img/logout.svg"
            alt="Logout"
            text="Logout"
            checkbox=""
            key="key-11"
          ></Link>
        </li>
        <li>
          <Link
            itemClass={` link--theme`}
            src="../../assets/img/moon-menu.svg"
            alt="theme"
            text="Darkmode"
            checkbox={true}
            key="key-123"
            eventFn={switchTheme}
          ></Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer