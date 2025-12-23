
var time = new Date() ;
console.log(time)

function currentTime () {
    return (
        <>
        <div className="slogan">
            {/* time ke liye new Date () se live time and date mil jaega fir use string me convert karnapade ga String(time) sirf date and time keliye time.toLocaleString() and only date ke liye time.toLocaleDateString() and only time ke liye time.toLocaleTimeString() */}
            This is the current time : {String(time)} ; 
        </div>
        <div className="slogan">
            This is the current time : {time.toLocaleString()} ; 
        </div>
        <div className="slogan">
            This is the current time : {time.toLocaleDateString()} ; 
        </div>
        <div className="slogan">
            This is the current time : {time.toLocaleTimeString()} ; 
        </div>
        </>
    )
}


export default currentTime ;

