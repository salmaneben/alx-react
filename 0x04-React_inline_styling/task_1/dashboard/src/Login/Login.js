import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <p className={css(styles.loginParagraph)}>Login to access the full dashboard</p>
      <form className={css(styles.loginForm)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={css(styles.input)} 
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            className={css(styles.input)} 
          />
        </div>
        <button className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: "2rem",
    "@media (max-width: 900px)": {
      padding: "1rem",
    },
  },
  loginParagraph: {
    marginBottom: "1rem",
  },
  loginForm: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  label: {
    marginRight: "0.5rem",
  },
  input: {
    padding: "0.25rem 0.5rem",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  button: {
    padding: "0.25rem 1rem",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: "3px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});

export default Login;