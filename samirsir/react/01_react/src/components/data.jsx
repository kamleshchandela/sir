import { Link } from "react-router-dom";

function data(){
    return (
        <>
            <div className="link">
                <Link className="link" to="/card">
                <p>imgs</p>
                </Link>
                <Link className="link" to="/card1">
                <p>calculeter</p>
                </Link>
                <Link className="link" to="/card3">
                <p>dono</p>
                </Link>
                <Link className="link" to="/card4">
                <p>cal imgs cal</p>
                </Link>
            </div>
            <div className="menubar">
                <span className='bar1'></span>
                <span className='bar2'></span>
                <span className='bar3'></span>
            </div>

        </>
    )
}


export default data ;