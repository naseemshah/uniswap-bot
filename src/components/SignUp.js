import '../App.css';
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import    {useRef,useContext} from 'react';
import AuthContext from '../context/auth-context';
function SignUp() {
  const context=useContext (AuthContext)
  const userNameEl =  useRef()
  const passwordEl =  useRef()
  const confirmPasswordEl =  useRef()
  const  submitHandler = async event => {
    
    event.preventDefault();
    let requestBody 
    let resource=""
   
      
        const username =  userNameEl.current.value;
        const password =  passwordEl.current.value;
        const confirmPassword=confirmPasswordEl.current.value;
    if (username.trim().length === 0 || password.trim().length === 0 || confirmPassword .trim().length === 0 || (confirmPassword !=password)) {
      return;
    }
      requestBody = {
         username:username,
         password:password
      };
      resource="signup"
 
    console.log(`http://localhost:5000/users/${resource}`,requestBody)

    let response=await fetch(`http://localhost:5000/users/${resource}`,

    

     {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status !== 200 && response.status !== 201) {
         
        return
      }
       
      const resData =await   response.json()
      if (resData.token) {
         context.login(
          resData .token,
          resData.username 
        );
      }
    console.log(resData)
 
  };
  return (
   <form className="login-signup" onSubmit={submitHandler}>
      <section className="login-signup-left-section">
        <div className="login-signup-logo"><img src={logo} alt="logo"/></div>
        <h1 className="login-signup-left-section-title">Create your new Account.</h1>
      </section>
      <section className="login-signup-right-section">
        <div className="login-signup-form">
          <h1 className="login-signup-right-section-title">Sign up</h1>
          <div className="input-row">
            <label htmlFor="username">User Name</label>
            <input name="username" ref={userNameEl} />
          </div>
          <div className="input-row">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" ref={passwordEl}/>
          </div>
          <div className="input-row">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input name="confirmPassword" type="password" ref={confirmPasswordEl}/>
          </div>
          <button type="submit">Sign up</button>
          <div className="login-signup-prompt">
            <p>Not a New User?</p>
            <Link to="/login" className="react-router-link-reset">
                       <p>Login</p>                    
               </Link>
          </div>
        </div>
      </section>
   </form>
  );
}

export default SignUp;
