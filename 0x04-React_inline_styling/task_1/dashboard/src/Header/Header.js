import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.headerImg)} alt="logo" />
      <h1 className={css(styles.headerText)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e0354b",
    fontSize: "1.4rem",
    borderBottom: "3px solid #e0354b",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  headerImg: {
    width: "200px",
    height: "200px",
    "@media (max-width: 900px)": {
      width: "150px",
      height: "150px",
    },
  },
  headerText: {
    margin: "0",
    "@media (max-width: 900px)": {
      marginTop: "1rem",
    },
  },
});

export default Header;