
  var [Q , Qfun] = useState("Q : " + localStorage.getItem("Question")) ;
  var [A , Afun] = useState("A : " + localStorage.getItem("Ans")) ;


  function Qfun1 () {
    Qfun("Q : " + localStorage.getItem("Question")) ;
  }

  function Afun1 () {
    Afun("Q : " + localStorage.getItem("Ans")) ;
  }


function Que () {

    return(
        <>
            <div onClick={Qfun1} className="Q">{Q}</div>
            <div onClick={Afun1} className="A">{A}</div>
        </>
    )

        









}


export default Que ;


