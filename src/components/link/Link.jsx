import React from "react";
const Link = ({itemClass, src, alt, text, checkbox, key,eventFn})=>{
  return (
    <a href="./" alt={alt} className={`${itemClass} link linkTheme`} key={key}>
      <div className="link__imgContainer">
        <img src={src} alt={alt} className="link__img" />
      </div>
      <span className="link__text">{text}</span>
      {checkbox && (
        <label className="link__label">
          <input
            type="checkbox"
            name="theme"
            className="link__checkbox"
            onClick={eventFn}
          />
          <span className="link__switcher"></span>
        </label>
      )}
    </a>
  );
}
export default Link

// нужно при нажатии на кнопку менять  класс 
// при нажатии на чекбокс изменяется тема

// собрать весь сcs в 1 файл
