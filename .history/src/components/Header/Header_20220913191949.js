import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";
import cn from "classnames";
import styles from "./Header.module.scss";

export default function Header() {
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive] = useState(true);


  return (
    <header>
      <ul
        className={cn(styles.topnav, active === true ? styles.responsive : "")}
      >
        <li>
          <Link to="/" className={cn(styles.active, styles.logo)}>
            Game Store
          </Link>
        </li>
        <li>
          <Link to="/Agreement">Соглашение</Link>
        </li>
        <li>
          <Link to="/support">Поддержка</Link>
        </li>
        <li>
          <a target="blank" href="https://linktr.ee/minkeani">
            Связь с нами
          </a>
        </li>
        <li>
          {" "}
          <div className={styles.favourite}>
            <CartBlock active={modalActive}, setActive={setModalActive} />
          </div>
        </li>
        <li className={styles.icon}>
          <a href="#" onClick={() => setActive(!active)}>
            ☰
          </a>
        </li>
      </ul>
    </header>
  );
}
