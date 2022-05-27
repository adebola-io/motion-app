import Head from "next/head";
import Link from "next/link";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import styles from "../../styles/login.module.css";

export default function Login() {
  const [loading, setLoading] = React.useState(false);
  let credentials = {
    email: "",
    password: "",
  };
  /**
   * Handle user login.
   * @param {Event} event
   */
  function handleLogin(event) {
    event.preventDefault();
    /** @type {HTMLInputElement} */
    const emailInput = event.target.querySelector("[name='email']");
    /** @type {HTMLInputElement} */
    const passwordInput = event.target.querySelector("[name='password']");
    credentials = { email: emailInput.value, password: passwordInput.value };
    emailInput.value = passwordInput.value = "";
    setLoading(true);
  }
  return (
    <>
      <Head>
        <title>motion - Login or Sign Up</title>
      </Head>
      {loading ? (
        <div className="full_width fc">
          <Loader />
        </div>
      ) : (
        <>
          <div className={styles.login_stage}>
            <h1>motion</h1>
            <h3>Handle your tasks with ease.</h3>
            <form onSubmit={handleLogin}>
              <Input type="text" name="email" placeholder="email" />
              <Input type="password" name="password" placeholder="password" />
              <Button
                value="Login"
                height="6vh"
                width="75vw"
                maxWidth="500px"
                minWidth="300px"
                maxHeight="65px"
                minHeight="50px"
              />
            </form>
            <span>
              Don&apos;t have an account? <Link href={"/signup"}>Sign Up.</Link>
            </span>
          </div>
        </>
      )}
    </>
  );
}
