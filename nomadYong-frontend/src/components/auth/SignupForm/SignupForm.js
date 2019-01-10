import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import formStyles from 'styles/formStyles.scss'


const SignupForm = (props) => (
  <div className={formStyles.formComponent}>
        <FacebookLogin
            appId="376989863060617"
            autoLoad={false}
            fields="name,email,picture"
            // callback={props.handleFacebookLogin}
            cssClass={formStyles.facebookLogin}
            icon="fab fa-facebook-square"
        />
        <GoogleLogin
            clientId="354131151000-hbk8i0cg1gsi44knac314of73tbgrnoq.apps.googleusercontent.com"
            render={renderProps => (
              <button className={formStyles.googleLogin} onClick={renderProps.onClick}>
                <i className={'fab fa-google'}></i>Login with Google
              </button>
            )}
            buttonText="Login with Google"
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
          />

        <span className={formStyles.divider}>or</span>
        <form
          className={formStyles.form}
          onSubmit={props.handleSubmit }
          method="post"
        >
            <input
                type="email"
                placeholder="Email"
                className={formStyles.textInput}
                value={props.emailValue}
                onChange={props.handleInputChange}
                name="email"
            />
            <input
                type="text"
                placeholder="Name"
                className={formStyles.textInput}
                value={props.nameValue}
                onChange={props.handleInputChange}
                name="name"
            />
            <input
                type="username"
                placeholder="Username"
                className={formStyles.textInput}
                value={props.usernameValue}
                onChange={props.handleInputChange}
                name="username"
            />
            <input
                type="password"
                placeholder="Password"
                className={formStyles.textInput}
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input
                type="submit"
                value="Sign up"
                className={formStyles.button}
            />
        </form>
    </div>
);

export default SignupForm;
