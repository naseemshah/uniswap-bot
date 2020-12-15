import '../App.css';
import logo from '../logo.svg'
import {Link} from 'react-router-dom'
import    {useRef,useState,useEffect,useContext} from 'react';
import AuthContext from '../context/auth-context';
function Login() {
  const context=useContext (AuthContext)
  const userNameEl =  useRef()
  const passwordEl =  useRef()
  const  submitHandler = async event => {
    
    event.preventDefault();
    let requestBody 
    let resource=""
   
      
        const username =  userNameEl.current.value;
        const password =  passwordEl.current.value;

    if (username.trim().length === 0 || password.trim().length === 0) {
      return;
    }
      requestBody = {
         username:username,
         password:password
      };
      resource="login"
 
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
        <h1 className="login-signup-left-section-title">Welcome,<br></br>Please Login.</h1>
      </section>
      <section className="login-signup-right-section">
        <div className="login-signup-form">
          <h1 className="login-signup-right-section-title">Login</h1>
          <div className="input-row">
            <label htmlFor="username">User Name</label>
            <input name="usernam" ref={userNameEl} />
          </div>
          <div className="input-row">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" ref={passwordEl}/>
          </div>
          <button type="submit">Login</button>
          <div className="login-signup-prompt">
            <p>New User?</p>
            <Link to="/signup" className="react-router-link-reset">
                       
 
                            <p>Register Here</p>
                         
                    </Link>
          </div>
          
        </div>
      </section>
   </form>
  );
}

export default Login;
