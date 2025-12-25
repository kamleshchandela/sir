import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  var arr = ["kamlesh" , "dashrat" , "hanuman" , "rishikesh"] ;
 var arr = [] ;





 
    // if ilse ka use html vale code ke andar nahi karsakte vaha ternary pperator ka use karsakte he 
    if(arr.length == 0){



      // yahase yato reaturn ko chalu kar do ua to niche se ternery oparator ya logical operator ka use karo



      // -----------------------
      // return(

      <>
        <h2>
          Team menbers
        </h2>
        <p>member is not availabel</p>

      </>


      // )
      




    }
    
    







  return (
    <>

    <h2>
      Team menbers
    </h2>

    {
      arr.length == 0 ? <p>member is not availabel</p> : "" // "" => null bhi likha sakte he
    }


    {
      arr.length == 0 && <h1>left true he to right ka priny kardiya</h1>
    }




    {/* jsx me mep ka use karna he jisme hame mepko kisime store karvaneke jarurat nahi he ab use sidha likhege to vo harbar arr ki items ko print karke dega jisse arr ki size janne ki jarurat nahi he or class bhi ekbar hi dena pade ga */}
    {
      arr.map((e , i)=>{


        // yaha key likha ne se error nahi aati or react ko sab refress karne ki jarurat nahi padath he jisse kam asan hojata he pageme koi error nahi aayegi lekin console me error likhakar aaye gi 
        return <p key={e} className='name'>{e + " " + i}</p>
      })
    }
      
      
    </>
  )
}

export default App
