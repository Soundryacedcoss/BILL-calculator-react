import './App.css';
import {useState} from 'react'
function App() {
  const[input,setInput]=useState('')
  const [output,setOutput]=useState("")
  const inputHandler=(e)=>{
   setInput(e.target.value)
  }
  const buttonHandler=(e)=>{
    let inpt=input
    let inptA=parseInt(inpt)
    if(inpt===""){
      alert("PLease enter units")
      setOutput()
    }
    if(inpt<0){
      alert("PLease enter positive value")
      setOutput("")
    }
     else if(inptA<=50){
      setOutput(inptA*3.5)
     }
     else if(inptA>50 && inptA<150){
      let res=(50*3.5)
      let inpt1=inpt-50;
      setOutput(res+inpt1*4.00);
     }
     else if(inptA>=150 && inptA<250){
      let res=(50*3.5 + 100*4.0 )
      let inpt1=inptA-150
      setOutput(res+inpt1*5.20);
     }
     else if(inptA>=250){
      let res=(50*3.5 + 100*4.0+100*5.20 )
      let inpt1=inptA-250
      setOutput(res+inpt1*6.50);
     }
  }
  return (
    <div className="App">
     <label>Please Enter unit :</label><input type="number" placeholder="Enter unit" onChange={inputHandler} />
     <div>
     <p>Total bill is: {output}</p>
     </div>
     <button className='button' onClick={buttonHandler}>Bill</button>
     
     
    </div>
  );
}

export default App;
