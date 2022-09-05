import axios from 'axios';
import {React,useState} from 'react';
import { useNavigate} from "react-router-dom";
import Body from './Body';

const Login = () => {
  
  const navigate = useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');


    async function getCredentials(e){
      e.preventDefault()

      const response = await axios.post('http://localhost:4000/login', {
            "email": email,
            "password": password
        })        
        console.log(response.data)

        if (response.data == 1){

          navigate('/body')
          // < Body />

        }
        else{
          
          setError("Incorrect password")

        }
    }



  return (
    <>

    <div className="login-main">
    <div className="login-border">
    <h3 style={{
                    color: "red"
                }}>{error}</h3>

        <form >


            <label for="email" class="lbl">Email</label><br/>
            <input type="text" class="inp"  required name="email" onChange={(e)=>setEmail(e.target.value)}/><br/>


            <label for="password" class="lbl">Password</label><br/>
            <input type="password" class="inp"  required name="password" onChange={(e)=>setPassword(e.target.value)}/><br/>

            <button className="signup-button" onClick={getCredentials}>LOGIN</button>



        </form>

</div>


    </div>
      
    </>
  )
}

export default Login
