import React from 'react'

const Login = (props) => {
    return (
        <>
          <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat On</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
          </div>
        </>
      )
}

export default Login
