import '../App.css';
import logo from '../logo.svg'
function SignUp() {
  return (
   <div className="login-signup">
      <section className="login-signup-left-section">
        <div className="login-signup-logo"><img src={logo} alt="logo"/></div>
        <h1 className="login-signup-left-section-title">Create your new Account.</h1>
      </section>
      <section className="login-signup-right-section">
        <div className="login-signup-form">
          <h1 className="login-signup-right-section-title">Sign up</h1>
          <div className="input-row">
            <label htmlFor="email">Email</label>
            <input name="email" type="email"/>
          </div>
          <div className="input-row">
            <label htmlFor="password">Password</label>
            <input name="password" type="password"/>
          </div>
          <div className="input-row">
            <label htmlFor="password">Confirm Password</label>
            <input name="password" type="password"/>
          </div>
          <button>Login</button>
          <div className="login-signup-prompt">
            <p>Not a New User?</p>
            <a href="/login">Login here</a>
          </div>
        </div>
      </section>
   </div>
  );
}

export default SignUp;
