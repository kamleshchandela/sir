import { useState } from 'react'
import './App.css'


if(localStorage.getItem("name1234") == undefined) {
  var name1 = prompt("Enter Your Name") ;
  localStorage.setItem("name1234" , name1) ;
  
}



function App() {
  // localStorage.setItem("Question" , "oko")
  var [data , datafun] = useState("") ;
  var [name12 , nameFun] = useState(localStorage.getItem("name1234")) ;
  var [Q , Qfun] = useState("last Q : " + localStorage.getItem("Question")) ;
  var [A , Afun] = useState("last A : " + localStorage.getItem("Ans")) ;


  function Qfun1 () {
    Qfun("last Q : " + localStorage.getItem("Question")) ;
  }

  function Afun1 () {
    Afun("last Q : " + localStorage.getItem("Ans")) ;
  }




  function c () {
    console.log("khali") ;
    datafun("") ;

  }
  function div () {
    console.log("/") ;
    datafun(data + "/") ;

  }
  function mul () {
    console.log("*") ;
    datafun(data + "*") ;

  }
  function sum () {
    console.log("+") ;
    datafun(data + "+") ;

  }
  function sub () {
    console.log("-") ;
    datafun(data + "-") ;

  }
  function dot () {
    console.log(".") ;
    datafun(data + ".") ;

  }
  function mod () {
    console.log("%") ;
    datafun(data + "%") ;

  }

  
  function one () {
    
    console.log(data + "1") ;
    datafun(data + "1") ;

  }
  function two () {
    
    console.log(data + "2") ;
    datafun(data + "2") ;

  }
  function three () {
    
    console.log(data + "3") ;
    datafun(data + "3") ;

  }
  function four () {
    
    console.log(data + "4") ;
    datafun(data + "4") ;

  }
  function five () {
    
    console.log(data + "5") ;
    datafun(data + "5") ;

  }
  function six () {
    
    console.log(data + "6") ;
    datafun(data + "6") ;

  }
  function seven () {
    
    console.log(data + "7") ;
    datafun(data + "7") ;

  }
  function eaight () {
    
    console.log( data + "8") ;
    datafun(data + "8") ;

  }
  function nine () {
    
    console.log( data + "9") ;
    datafun(data + "9") ;

  }
  function zero () {
    
    console.log( data + "0") ;
    datafun(data + "0") ;

  }


  function ans () {



    localStorage.setItem("Question" , data);
    Qfun("last Q :" + localStorage.getItem("Question"))
    console.log(eval(data)) ;
    datafun(eval(data)) ;
    localStorage.setItem("Ans" , eval(data));
    Afun("last A :" + localStorage.getItem("Ans"))

  }

  function del () {
    datafun(data.split("").splice(0 , data.length - 1).join(""));
    console.log(data.split("").splice(0 , data.length - 1))
    
  }

  // console.log(name12)

  function chenge () {
    var name1 = prompt("Enter New Name") ;
    localStorage.setItem("name1234" , name1) ;
    nameFun(localStorage.getItem("name1234")) ;
  }


  return (
    <>
      <div className="chenge" onClick={chenge}>+</div>
      <div id="calculator">
        <div className="name">Hii! {name12}</div>
        <input type="text" readOnly id="display" value={data} />
        <div id="btn-con">
          <button onClick={c} className='btnc'>C</button>
          <button onClick={mod} className='btn'>%</button>
          <button onClick={del} className='btnw'> W </button>
          <button onClick={mul} className='btn'>X</button>
          

          <button onClick={seven} className='btn'>7</button>
          <button onClick={eaight} className='btn'>8</button>
          <button onClick={nine} className='btn'>9</button>
          <button onClick={div} className='btn'>/</button>

          <button onClick={four} className='btn'>4</button>
          <button onClick={five} className='btn'>5</button>
          <button onClick={six} className='btn'>6</button>
          <button onClick={sum} className='btn'>+</button>

          <button onClick={one} className='btn'>1</button>
          <button onClick={two} className='btn'>2</button>
          <button onClick={three} className='btn'>3</button>
          <button onClick={sub} className='btn'>-</button>

          <button onClick={zero} className='btn0'>0</button>
          <button onClick={dot} className='btn'>.</button>
          <button onClick={ans} className='btne'>=</button>


          <div id="display1">
                <div onClick={Qfun1} className="Q">{Q}</div>
                <div onClick={Afun1} className="A">{A}</div>
          </div>
          





        </div>
      </div>
      
    </>
  )
}

export default App
