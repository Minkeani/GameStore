import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import P from "../Ui/P/P";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper__footer">
        <Link to="/" className="header__store-title">
          Game Store
        </Link>

        <div>
          <P>
            Платформа для продажи цифровых товаров. Торговый агрегатор по
            оказанию услуг в сфере торговли. Все закупаемые ключи приобретаются
            у официальных поставщиков. Все названия продуктов, компаний и марок,
            логотипы и товарные знаки являются собственностью соответствующих
            владельцев.
          </P>
          <a href="https://linktr.ee/minkeani" target="blank">
            Связаться
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
