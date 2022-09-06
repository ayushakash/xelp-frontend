import {React,useState} from 'react'
import { Navigate,useNavigate } from 'react-router-dom';

const Body = () => {
  
    const navigate = useNavigate();
    const[num1,setNum1]=useState()
    const[num2,setNum2]=useState()
    const[series,setSeries]=useState([])
         let n1=parseInt(num1);
         let n2=parseInt(num2);
         let final=[];

    function  fibonacciSeries(){
      let count=7;
      

      for(let i=0;i<=count;i++){        
        final[i]=n1+" ";
        let next=n1+n2;
        n1=n2;
        n2=next;
        
      }
      setSeries([...final]);                //array.push


    }

    const logout = () => {
      navigate('/login')
    }
  return (
    <>
    <button className="logout-button" onClick={logout}>LOGOUT</button>
    <div className="login-main">
      
    <div className="login-border">



    <label htmlFor="num1" className="lbl">1st Number</label><br/>
            <input type="text" className="inp"  required name="num1" onChange={(e)=>setNum1(e.target.value)}/><br/>


            <label htmlFor="num2" className="lbl">2nd Number </label><br/>
            <input type="text" className="inp"  required name="num2" onChange={(e)=>setNum2(e.target.value)}/><br/>

            <button className="signup-button" onClick={fibonacciSeries}>SUBMIT</button>
            <h2>Fibonacci Series is:</h2><h2>{series}</h2>

    </div>
    </div>
    </>
  )
}

export default Body
