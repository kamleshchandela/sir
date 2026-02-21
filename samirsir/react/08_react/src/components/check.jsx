import {useContext} from 'react' 
import { CounterContext } from './context'
import Child2 from './chile2'

function Check () {
    var count = useContext(CounterContext)

    return (
        <>
                <p>
                    okokook
                </p>
                <p>
                    {count}
                </p>


                <Child2 />




        </>
    )
    
}

export default Check ;

