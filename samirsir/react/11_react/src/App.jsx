import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetPostsQuery } from './rtkquery/apifile'

function App() {
  const [count, setCount] = useState(0)
  const { data } = useGetPostsQuery() ;
  console.log(data)
  return (
    <>
      {
        data?.title ? <p>{data?.title}</p> : data?.map((e , i)=>{
                                                              return (
                                                                <p key={i}>{e.title}</p>
                                                              )
                                                            })
          
        
        
      }
      
    </>
  )
}

export default App
