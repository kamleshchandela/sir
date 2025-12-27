import './App.css'
import Nav from './components/nav';
import gallery from './components/gallery';
import Gallery from './components/gallery';
import calculater from './components/calculator';
import Calculater from './components/calculator';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Dono from './components/donoCard';

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




    {Nav()}


    <BrowserRouter>
      <Routes>
        <Route path='card' element = {<Gallery />}></Route>
        <Route path='/card1' element = {<Calculater />}></Route>
        <Route path='/card3' element = {<Dono />}></Route>

        
      </Routes>
    </BrowserRouter>








    {/* {gallery()}
    <Gallery />
    {calculater()}
    <Calculater /> */}





      <a href="http://localhost:5175/card"><button>galary</button></a>
      
    
    














    </>
  )
}

export default App
