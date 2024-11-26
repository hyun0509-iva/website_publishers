import React from "react";
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div>Copyright 2022. D.Hyun All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
