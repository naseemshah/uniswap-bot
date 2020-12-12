import '../App.css';
import logo from '../logo.svg'
function Login() {
  return (
   <div className="login-signup">
      <section className="login-signup-left-section">
        <div className="login-signup-logo"><img src={logo} alt="logo"/></div>
        <h1 className="login-signup-left-section-title">Welcome,<br></br>Please Login.</h1>
      </section>
      <section className="login-signup-right-section">
        <div className="login-signup-form">
          <h1 className="login-signup-right-section-title">Login</h1>
          <div className="input-row">
            <label htmlFor="email">Email</label>
            <input name="email" type="email"/>
          </div>
          <div className="input-row">
            <label htmlFor="password">Password</label>
            <input name="password" type="password"/>
          </div>
          <button>Login</button>
          <div className="login-signup-prompt">
            <p>New User?</p>
            <a href="/sign-up">Register here.</a>
          </div>
          
        </div>
      </section>
   </div>
  );
}

export default Login;
