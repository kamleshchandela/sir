import './App.css'
import Nav from './components/nav';
import gallery from './components/gallery';
import Gallery from './components/gallery';
import calculater from './components/calculator';
import Calculater from './components/calculator';

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
    {gallery()}
    <Gallery />
    {calculater()}
    <Calculater />



    
    














    </>
  )
}

export default App
