import React from "react";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
import styles from "../../styles/signup.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  credentials = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  /**
   * Handle user registration.
   * @param {Event} event
   */
  handleSignUp(event) {
    event.preventDefault();
    /** @type {HTMLInputElement} */
    const username = event.target.querySelector("[name='username'");
    /** @type {HTMLInputElement} */
    const email = event.target.querySelector("[name='email'");
    /** @type {HTMLInputElement} */
    const password = event.target.querySelector("[name='password'");
    /** @type {HTMLInputElement} */
    const password2 = event.target.querySelector("[name='password2'");
    this.credentials = {
      username: username.value,
      email: email.value,
      password: password.value,
      password2: password2.value,
    };
    console.log(this.credentials);
    username.value = email.value = password.value = password2.value = "";
  }
  render() {
    return (
      <>
        <Head>
          <title>motion - Create Account</title>
        </Head>
        <div className={styles.signup_stage}>
          <h1>motion</h1>
          <h3>Manage your tasks with ease.</h3>
          <form onSubmit={this.handleSignUp.bind(this)}>
            <Input name="username" type="text" placeholder="username" />
            <Input name="email" type="email" placeholder="email" />
            <Input name="password" type="password" placeholder="password" />
            <Input
              name="password2"
              type="password"
              placeholder="confirm password"
            />
            <Button
              value="Sign Up"
              height="6vh"
              width="75vw"
              maxWidth="500px"
              minWidth="300px"
              maxHeight="65px"
              minHeight="50px"
            />
          </form>
          <span>
            Already have an account? <Link href="/login">Login.</Link>
          </span>
        </div>
      </>
    );
  }
}
export default SignUp;
