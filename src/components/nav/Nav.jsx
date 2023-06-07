import React from "react";
import Link from "../link/Link";
import data from "../../data/data-link"


const Nav = ()=>{
  return (
    <ul className={`nav nav__list`}>
      {data.map((link) => {
        return (
          <li className={`nav__item`}>
            <Link
              itemClass='nav__link'
              src={link.img__link}
              alt={link.text}
              text={link.text}
              checkbox=""
              key={link.id}
            ></Link>
          </li>
        );
      })}
    </ul>
  );

}
export default Nav