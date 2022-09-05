import React from 'react'

const Signup = () => {
    return (<> 
    
            <div className="signup-main">
            <div className="login-border">

                <form action='/' method='POST'>

            <label for="name" class="lbl">Name</label><br/>
            <input type="text" class="inp"  required name="name"/><br/>

            <label for="email" class="lbl">Email</label><br/>
            <input type="text" class="inp"  required name="email"/><br/>

            <label for="mobile" class="lbl">Mobile Number</label><br/>
            <input type="text" class="inp"  required name="phone"/><br/>

            <label for="password" class="lbl">Password</label><br/>
            <input type="password" class="inp"  required name="password"/><br/>

            <label for="confirmPassword" class="lbl">Confirm Password</label><br/>
            <input type="password" class="inp"  required name="confirmPassword"/><br/>

            <button className="signup-button" type='submit'>SIGNUP</button>


                </form>
                </div>


            </div>
    
    
    
    
    
    
    
    
    </>
                )
}

export default Signup