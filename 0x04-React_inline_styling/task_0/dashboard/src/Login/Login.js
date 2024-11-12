import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginBody: {
    margin: '50px',
    flexGrow: 1
  },
  input: {
    margin: '0 10px'
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(e) {
    const { value } = e.target;
    const { password } = this.state;
    this.setState({
      email: value,
      enableSubmit: value !== '' && password !== ''
    });
  }

  handleChangePassword(e) {
    const { value } = e.target;
    const { email } = this.state;
    this.setState({
      password: value,
      enableSubmit: email !== '' && value !== ''
    });
  }

  render() {
    return (
      <div className={css(styles.loginBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              className={css(styles.input)}
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              className={css(styles.input)}
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </label>
          <input
            type="submit"
            value="OK"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;