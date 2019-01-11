import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import formStyles from 'styles/formStyles.scss'


const LoginForm = (props) => (
  <div className={formStyles.formComponent}>
        <form className={formStyles.form} onSubmit={props.handleSubmit} >
            <input
                type="text"
                className={formStyles.textInput}
                placeholder="Email"
                value={props.emailValue}
                onChange={props.handleInputChange}
                name="email"
            />
            <input
                type="password"
                className={formStyles.textInput}
                placeholder="Password"
                value={props.passwordValue}
                onChange={props.handleInputChange}
                name="password"
            />
            <input
                type="submit"
                value="Log in"
                className={formStyles.button}
            />
        </form>
        <span className={formStyles.divider}>or</span>
        <span>
          <FacebookLogin
            appId="376989863060617"
            autoLoad={false}
            fields="name,email,picture"
            callback={''}
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
        </span>
        <br />
        <span className={formStyles.forgotLink}>
            Forgot password?
        </span>
    </div>
);

export default LoginForm;
