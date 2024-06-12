import React from "react";
import styles from "./style.module.css"
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className={clsx(styles.footer, styles.item)}>
    <p>I am the footer</p>
  </footer>
  );
}
