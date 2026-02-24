import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function nav () {
    return (
        <>
            <div className="nav">
                <Link to="/api1">
                    <p className='ok'>.api1</p>
                </Link>
                <Link to={"/api2"}>
                    <p className='ok'>.api2</p>
                </Link>
                
            </div>
        </>
    )
}

export default nav ;