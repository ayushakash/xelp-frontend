import axios from 'axios';
import {React,useState} from 'react';
import { useNavigate} from "react-router-dom";


const Login = () => {
  
  const navigate = useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');


    async function getCredentials(e){
      e.preventDefault()
      console.log(email)
      console.log(password)
      try {
        const response = await axios.post('http://localhost:4000/login', {
            "email": email,
            "password": password
        })        
        console.log(response)

        if (response.status === 200) {
          console.log("User details are correct")
          navigate('/body')
        } else {
          setError(response.data.message)
        }
      } catch(error) {
        console.log("Error in logging in", error)
        setError(error.response.data.message)
      }
      

        // if (response.data == 1){

        //   navigate('/body')

        // }
        // else{
          
        //   setError("Incorrect password")

        // }
    }



  return (
    <>

    <div className="login-main">
    <div className="login-border">
    <h3 style={{
                    color: "red"
                }}>{error}</h3>

        <form >


            <label htmlFor="email" className="lbl">Email</label><br/>
            <input type="text" className="inp"  required name="email" onChange={(e)=>setEmail(e.target.value)}/><br/>


            <label htmlFor="password" className="lbl">Password</label><br/>
            <input type="password" className="inp"  required name="password" onChange={(e)=>setPassword(e.target.value)}/><br/>

            <button className="signup-button" onClick={getCredentials}>LOGIN</button>



        </form>

</div>


    </div>
      
    </>
  )
}

export default Login
