import {React, useState} from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios';

const validateMobile = (mobile) => { //function to validate mobile number
    return String(mobile)
        .toLowerCase()
        .match(/^[6-9]\d{9}$/);
};

const validateEmail = (email) => { //function to validate email
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const Signup = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

    function validation() { //this function validates all the fields

        if (password === confirmPassword) {

            if (validateEmail(email)) {

                if (validateMobile(mobile)) {

                    navigate('/login')
                    sendToDatabase();

                } else {

                    setError('Please enter valid mobile Number')

                }

            } else {

                setError('Please enter valid email ID')

            }
        } else {

            setError('password and confirm password are not same')
        }

    }
    async function sendToDatabase() {                                                        //this function sends data to database

        const response = await axios.post('http://localhost:4000/signup', {
            "name": name,
            "email": email,
            "mobile": mobile,
            "password": password
        }) 
        console.log(response);

    }

    return (
        <> <div className = "signup-main" > <div className="login-border">
            <h3 style={{
                    color: "red"
                }}>{error}</h3>

            <form onSubmit={(e) => e.preventDefault()}>

                <label for="name" class="lbl">Name</label><br/>
                <input
                    type="text"
                    class="inp"
                    required="required"
                    name="name"
                    onChange={(e) => setName(e.target.value)}/><br/>

                <label for="email" class="lbl">Email</label><br/>
                <input
                    type="text"
                    class="inp"
                    required="required"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}/><br/>

                <label for="mobile" class="lbl">Mobile Number</label><br/>
                <input
                    type="text"
                    class="inp"
                    required="required"
                    name="phone"
                    maxLength="10"
                    onChange={(e) => setMobile(e.target.value)}/><br/>

                <label for="password" class="lbl">Password</label><br/>
                <input
                    type="password"
                    class="inp"
                    required="required"
                    name="password"
                    minLength="8"
                    onChange={(e) => setPassword(e.target.value)}/><br/>

                <label for="confirmPassword" class="lbl">Confirm Password</label><br/>
                <input
                    type="password"
                    class="inp"
                    required="required"
                    name="confirmPassword"
                    minLength="8"
                    onChange={(e) => setConfirmPassword(e.target.value)}/><br/>

                <button className="signup-button" onClick={validation}>SIGNUP</button>

            </form>
        </div>

    </div>

</>
    )
}

export default Signup