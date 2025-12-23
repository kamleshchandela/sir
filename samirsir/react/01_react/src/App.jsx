import './App.css'


document.addEventListener("wheel" , (e)=>{
  if(e.deltaY > 0){
    document.querySelector(".navbar").style.marginTop = "-10vw" ;
  }
  else{
    document.querySelector(".navbar").style.marginTop = "0vw" ;

  }
})






function App() {
  
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <h1>
          MYLOGO
        </h1>
      </div>
      <div className="link">
        <p>HOME</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
      <div className="menubar">
        <span className='bar1'></span>
        <span className='bar2'></span>
        <span className='bar3'></span>
      </div>
    </div>
    <div className="container">
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1760544962324-6baac83843dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" className="img" />
        <p className="title">
            HAPPY NEW YEAR
        </p>
        <button className='btn'>MORE</button>
      </div>
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1760544962324-6baac83843dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" className="img" />
        <p className="title">
            HAPPY NEW YEAR
        </p>
        <button className='btn'>MORE</button>
      </div>
    </div>
    
    
    
    
    <div className="container">
      <div className="card1">
        <img src="https://plus.unsplash.com/premium_photo-1760544962324-6baac83843dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" className="img" />
        <p className="title1">
            Spiderman
        </p>
        <p className="title2">
          12
        </p>
      </div>
      <div className="card1">
        <img src="https://plus.unsplash.com/premium_photo-1760544962324-6baac83843dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" className="img" />
        <p className="title1">
            Wonder Women
        </p>
        <p className="title2">
          30
        </p>
      </div>
      <div className="card11">
        <p className="title2">
          5 - 0
        </p>
      </div>
      <div className="card1">
        <img src="https://plus.unsplash.com/premium_photo-1760544962324-6baac83843dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" className="img" />
        <p className="title1">
            Captain America
        </p>
        <p className="title2">
          15
        </p>
      </div>
      <div className="card1">
        <img src="https://plus.unsplash.com/premium_photo-1760544962324-6baac83843dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="" className="img" />
        <p className="title1">
            Gem Women
        </p>
        <p className="title2">
          12
        </p>
      </div>
      
    </div>




    <div className="calculater">

      <div className="ans">
        7788
      </div>

      <div className="grid">
        <button className="c c1">C</button>
        <button className="c c1">+ / -</button>
        <button className="c c1">%</button>
        <button className="c c3">/</button>
        <button className="c c2">7</button>
        <button className="c c2">8</button>
        <button className="c c2">9</button>
        <button className="c c3">X</button>
        <button className="c c2">4</button>
        <button className="c c2">5</button>
        <button className="c c2">6</button>
        <button className="c c3">-</button>
        <button className="c c2">1</button>
        <button className="c c2">2</button>
        <button className="c c2">3</button>
        <button className="c c3">+</button>
        <button className="c c2 cc">0</button>
        <button className="c c2">,</button>
        <button className="c c3">=</button>
      </div>







    </div>














    </>
  )
}

export default App
