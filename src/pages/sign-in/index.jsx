import React, { useState } from "react";
import styles from "./SignIn.module.css";
import Image from "next/image";
import Link from "next/link";

function index() {
  const [emailError, setEmailError] = useState("");
  const [passwrodError, setPasswordError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const formHandler = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={`${styles.SignInTextDiv} row min-vh-100`}>
      <div className="d-none d-md-flex col-md-8 d-flex align-items-center justify-content-center border">
        <div className={styles.Textsection}>
          <div className={styles.title}>
            Welcome Back to <br />
            <span className="blueText">OneRoof Technologies !</span>
          </div>
          <div className={styles.subTitle}>
            Sign in to access your employee portal and stay connected.
            Collaborate, manage tasks, and grow together under one roof. <br />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 bg-white min-vh-100 d-flex justify-content-center align-items-center">
        <div className="w-100">
          <div className="d-flex justify-content-center my-4">
            <Image src="/blackLogo.png" width={100} height={30} alt="ORT_" />
          </div>
          <form className="my-4">
            <div className={styles.InputDiv}>
              <div
                className={styles.error}
                data-state={emailError ? "true" : "false"}
              >
                {emailError && emailError}
              </div>
              <input
                type="text"
                placeholder="e.g harry.potter@onerooftech.com"
                name="email"
                value={email}
                onChange={formHandler}
              />
              <label htmlFor="email" className="d-block">
                Enter Email Address :
              </label>
            </div>
            <div className={styles.InputDiv}>
              <div
                className={styles.error}
                data-state={passwrodError ? "true" : "false"}
              >
                {passwrodError && passwrodError}
              </div>
              <input
                type="password"
                placeholder="e.g Caput Draconis"
                name="password"
                value={password}
                onChange={formHandler}
              />
              <label htmlFor="email" className="d-block">
                Enter Password :
              </label>
            </div>
            <div className="text-end my-2">
              <Link href="/">Forgot Password ?</Link>
            </div>
            <button className={styles.button}>Login </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
