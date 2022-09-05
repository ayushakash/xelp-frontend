import React from 'react'

const Login = () => {
  return (
    <>

    <div className="login-main">
    <div className="login-border">

        <form action="/login" method="post">


            <label for="email" class="lbl">Email</label><br/>
            <input type="text" class="inp"  required name="email"/><br/>


            <label for="password" class="lbl">Password</label><br/>
            <input type="password" class="inp"  required name="password"/><br/>

            <button className="signup-button" type='submit'>LOGIN</button>



        </form>

</div>


    </div>
      
    </>
  )
}

export default Login
