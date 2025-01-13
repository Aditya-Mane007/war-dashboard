import React from "react";
import styles from "./SignIn.module.css";
import Image from "next/image";
import Link from "next/link";

function index() {
  return (
    <div className="row min-vh-100">
      <div className="col-12 col-md-8 d-flex align-items-center justify-content-center border">
        <div className={styles.Textsection}>
          <div className={styles.title}>
            Welcome Back to{" "}
            <span className="blueText">OneRoof Technologies !</span>
          </div>
          <div className={styles.subTitle}>
            Sign in to access your employee portal and stay connected.
            Collaborate, manage tasks, and grow together under one roof. <br />
          </div>
        </div>
      </div>
      <div className="col-4 my-auto mx-auto">
        <div className="d-flex justify-content-center my-4">
          <Image src="/blackLogo.png" width={100} height={30} alt="ORT_" />
        </div>
        <form className="my-4">
          <div className={styles.InputDiv}>
            <input type="text" placeholder="e.g harry.potter@onerooftech.com" />
            <label htmlFor="email" className="d-block">
              Enter Email Address :
            </label>
          </div>
          <div className={styles.InputDiv}>
            <input type="text" placeholder="e.g Caput Dracons" />
            <label htmlFor="email" className="d-block">
              Enter Password :
            </label>
          </div>
          <Link href="/">Forgot Password ?</Link>
          <button className="my-2">Login </button>
        </form>
      </div>
    </div>
  );
}

export default index;
