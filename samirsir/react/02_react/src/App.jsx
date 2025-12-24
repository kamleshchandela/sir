
import './App.css'
import sum from './sum'
import mul from './mul'
import div from './div'
import sub from './sub'



var a = prompt();
var b = prompt();
var c = prompt();

if(c == "+"){
  console.log(sum(a,b))
}
else if(c == "-"){
  console.log(sub(a,b))
}
else if(c == "/"){
  console.log(div(a,b))
}
else if(c == "*"){
  console.log(mul(a,b))
}





function App() {
  

  return (
    <>
      
      <div className="nav">
        <div className="logo"></div>
      </div>
      





      <section>
        <img src="https://images.unsplash.com/photo-1765790859163-53e82c11775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" className="i1" />
        <img src="https://plus.unsplash.com/premium_photo-1700838996339-de3bd9663344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hyaXN0bWFzfGVufDB8fDB8fHww" className="i2" alt="" />
        <img src="https://plus.unsplash.com/premium_photo-1701454736122-14b846cfb3c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="i3" />
        <img src="https://media.istockphoto.com/id/109720894/photo/vacations-for-santa.webp?a=1&b=1&s=612x612&w=0&k=20&c=a3qUW9diSMWuYQZ0S_wAaqfDnLRFv32dIUMff9HJZak=" alt="" className="i4" />
        <img src="https://plus.unsplash.com/premium_photo-1726880427423-0fb7cda3fefb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="i5" />
        <img src="https://images.unsplash.com/photo-1514773896690-40d0fd46f143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="i6" />
      </section>
    </>
  )
}

export default App
