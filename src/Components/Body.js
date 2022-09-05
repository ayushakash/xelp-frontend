import {React,useState} from 'react'

const Body = () => {

    const[num1,setNum1]=useState()
    const[num2,setNum2]=useState()
         let n1=parseInt(num1);
         let n2=parseInt(num2);

    function  fibonacciSeries(){
      let count=7;
      

      for(let i=0;i<=count;i++){

        console.log(n1);
        let next=n1+n2;
        n1=n2;
        n2=next;

      }


    }
  return (
    <>
      
    <div className="login-main">
    <div className="login-border">



    <label for="num1" class="lbl">1st Number</label><br/>
            <input type="text" class="inp"  required name="num1" onChange={(e)=>setNum1(e.target.value)}/><br/>


            <label for="num2" class="lbl">2nd Number </label><br/>
            <input type="text" class="inp"  required name="num2" onChange={(e)=>setNum2(e.target.value)}/><br/>

            <button className="signup-button" onClick={fibonacciSeries}>SUBMIT</button>

    </div>
    </div>
    </>
  )
}

export default Body
