import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";

export default function Aside() {
  return (
    <aside className={clsx(styles.aside, styles.item)}>
    <p>Ads and side stuff</p>
  </aside>
  );
}
