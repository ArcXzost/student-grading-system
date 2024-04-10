'use client';
import React from 'react';
import { useRef, useEffect } from 'react';
import styles from "../ui/login/login.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
//add as dependency

const Login = () => {

  const containerRef = useRef(null);
  const signUpButtonRef = useRef(null);
  const signInButtonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = signUpButtonRef.current;
    const signInButton = signInButtonRef.current;

    const handleSignInClick = () => {
      console.log("Sign in clicked");
      container.classList.add("rightpanelactive");
    };

    const handleSignUpClick = () => {
      console.log("Sign up clicked");
      container.classList.remove("rightpanelactive");
    };

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);

    return () => {
      signUpButton.removeEventListener("click", handleSignUpClick);
      signInButton.removeEventListener("click", handleSignInClick);
    };
  }, []);

  return (

    <div className={styles.login}>
      <h1 className={styles.h1}>Welcome to IIITG STUDENT MANAGEMENT PORTAL<p className={styles.p}></p></h1>
      <div className={styles.container} id="container" ref={containerRef}>
        <div className={styles.formcontainer + ' ' + styles.signupcontainer}>
          <form className={styles.form} action="#">
            <h1 className={styles.h1}>Create Account</h1>
            <div className={styles.socialcontainer}>
              <a className={styles.a} href="#" class="social">
                <FontAwesomeIcon icon={faGoogle} className="fa-brands fa-google"></FontAwesomeIcon>
              </a>
              <a className={styles.a} href="#" class="social">
                <FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin" ></FontAwesomeIcon></a>
              <a className={styles.a} href="#" class="social">
                <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook"></FontAwesomeIcon></a>
            </div>
            <span className={styles.span}>or use your email for registration</span>
            <input className={styles.input} type="text" placeholder="Name" />
            <input className={styles.input} type="email" placeholder="Email" />
            <input className={styles.input} type="password" placeholder="Password" />
            <button className={styles.button}>Sign Up</button>
          </form>
        </div>
        <div className={styles.formcontainer + ' ' + styles.signincontainer}>
          <form className={styles.form} action="/dashboard">
            <h1 className={styles.h1}>Sign in</h1>
            <div className={styles.socialcontainer}>
              <a className={styles.a} href="#" class="social">
                <FontAwesomeIcon icon={faGoogle} className="fa-brands fa-google"></FontAwesomeIcon>
              </a>
              <a className={styles.a} href="#" class="social">
                <FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin" ></FontAwesomeIcon></a>
              <a className={styles.a} href="#" class="social">
                <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook"></FontAwesomeIcon></a>
            </div>
            <span className={styles.span}>or use your account</span>
            <input className={styles.input} type="email" placeholder="Email" />
            <input className={styles.input} type="password" placeholder="Password" />
            <a className={styles.a} href="#">Forgot your password?</a>
            <button className={styles.button}>Sign In</button>
          </form>
        </div>
        <div className={styles.overlaycontainer}>
          <div className={styles.overlay}>
            <div className={styles.overlaypanel + ' ' + styles.overlayleft}>
              <h1 className={styles.h1}>Welcome Back!</h1>
              <p className={styles.p}>To keep connected with us please login with your personal information!</p>
              <button className={styles.ghost + ' ' + styles.button} id="signIn" ref={signInButtonRef}>Sign In</button>
            </div>
            <div className={styles.overlaypanel + ' ' + styles.overlayright}>
              <h1 className={styles.h1}>Hello, IIITG STUDENT!</h1>
              <p className={styles.p}>Enter your details to view your profile!</p>
              <button className={styles.ghost + ' ' + styles.button} id="signUp" ref={signUpButtonRef}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          Created as a Software Engineering Project by Ashutosh, Arijeet, Lohit .
          <a target="_blank" href="https://florin-pop.com">Github</a>
        </p>
      </footer>
    </div>
  )
}

export default Login;
