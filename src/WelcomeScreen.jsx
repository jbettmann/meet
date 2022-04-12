import React from "react";
import './WelcomeScreen.css';


function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div class="WelcomeScreen">
        <h2>Welcome to</h2>
        <h1 class="meet-logo">Meet</h1>
        <h4>
          An app for full-stack developers <br/>
          too see upcoming events around the world!
        </h4>
        <div class="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button onClick={() => { props.getAccessToken() }}
              rel="nofollow noopener"
              class="btn-text"
            >
              <b>Sign in with google</b>
            </button>
            </div>
        </div>
          <a
            href="https://jbettmann.github.io/meet/privacy.html"
            rel="nofollow noopener"
          >
            Privacy policy
          </a>
        </div> ): null }

export default WelcomeScreen;