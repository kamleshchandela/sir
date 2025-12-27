import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dadaStor from './dataPops/datapops'
import DadaStor1 from './dataPops/data1'


// let img = 

function App() {

  return (
    
    // fragment tag <> </>
    <> 

        <div className="data1234">

            {dadaStor("kamlesh" , "India revokes order to preload smartphones with state-owned security app" , "2025-12-03T13:53:04Z" , "https://media.guim.co.uk/b904a02803ee81d781f8da6dc4aa564d596f57d9/818_0_5840_4672/500.jpg")}
            {dadaStor("world" , "India confirms deadly Delhi car blast being treated as terror incident" , "2025-12-03T13:53:04Z" , "https://media.guim.co.uk/39221d20dcae4713412b27e0203dbd48dff75ede/487_0_4411_3528/500.jpg")}
            {dadaStor("sport" , "Marnus Labuschagne dropped from Australia ODI squad to face India" , "202025-10-07T03:18:29Z" , "https://media.guim.co.uk/b274a24b41e579c019ee6b99a2e6e2f2f97964b6/698_0_5563_4450/500.jpg")}
            
            {dadaStor("world" , "Clive of India isn’t welcome in Shrewsbury either | Letters" , "2025-08-18T16:31:29Z" , "https://media.guim.co.uk/07e08bf7154f04922609fb53d0ad80629fd723d5/563_0_5600_4480/500.jpg")}
            {dadaStor("world" , "Putin vows oil shipments to India will be ‘uninterrupted’ in defiance of US" , "2025-12-05T13:38:14Z" , "https://media.guim.co.uk/c81b457776075fe64f066f20405412bc2a77ed23/106_13_2669_2135/500.jpg")}
            {dadaStor("sport" , "Australia v India: first men’s Twenty20 international abandoned – as it happened" , "2025-12-03T13:53:04Z" , "https://media.guim.co.uk/62c91deb793acc0e80fbbaa05e932324e9a0c783/503_0_4587_3668/500.jpg")}
            


            <DadaStor1 img = "https://media.guim.co.uk/62c91deb793acc0e80fbbaa05e932324e9a0c783/503_0_4587_3668/500.jpg" popes = "kamlesh" discription = "kamlesh" date = "kamlesh" />

            <DadaStor1 img = "https://media.guim.co.uk/b904a02803ee81d781f8da6dc4aa564d596f57d9/818_0_5840_4672/500.jpg" popes = "world" discription = "India revokes order to preload smartphones with state-owned security app" date = "2025-12-03T13:53:04Z" />
            <DadaStor1 img = "https://media.guim.co.uk/39221d20dcae4713412b27e0203dbd48dff75ede/487_0_4411_3528/500.jpg" popes = "world" discription = "India confirms deadly Delhi car blast being treated as terror incident" date = "2025-12-03T13:53:04Z" />
            <DadaStor1 img = "https://media.guim.co.uk/b904a02803ee81d781f8da6dc4aa564d596f57d9/818_0_5840_4672/500.jpg" popes = "world" discription = "India revokes order to preload smartphones with state-owned security app" date = "2025-12-03T13:53:04Z" />


             
              
      </div>
      
    </>
  )
}

export default App
