import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
    color: '#e0354b'
  },
  logo: {
    width: '200px',
    height: 'auto'
  }
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;