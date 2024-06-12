import React from "react";
import clsx from "clsx";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={clsx(styles.header, styles.item)}>
      <nav>
        <p>Nav element</p>
      </nav>
    </header>
  );
}
