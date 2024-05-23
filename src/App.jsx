import React , {useState , useRef , useEffect}  from  "react"; 

function App() {
  const [number , setNumber] = useState(false)
  const showNumber = useRef();
  // function UseState(){
  //   setNumber( number => number - 1 )
  //   if(number<= 0){
  //     showNumber.current.style.color = 'red'
  //   }
  // }
  // function UseState2(){
  //   setNumber( number => number + 1)
  //   if(number>= 0){
  //     showNumber.current.style.color = 'green'
  //   }
    
  // }
  
  return (
    
    <div className="main-App">
    <div className="App">
     <h1 className="welcom-text">Welcome To <span className="sass-text purple ">Sass</span> 101</h1>    
     <p className="larnMore-text">The best pre-proccesor for css</p>
     <br />
    <p className="craeteNumber">  <span ref={showNumber}>{number ? "PARS ElX pric : 5,000 $" : "PARS XUM pric : 10,000 $"}</span> </p>
    <br />
     <button onClick={()=>{
      setNumber(!number)
     }} className="button-App purple">{number ? "Low Option" : "Full Option"}</button>
    <br />
     {/* <button onClick={UseState} className="button-App purple">Low-off </button> */}
     <br />
     <p></p>
    </div>
    <div className="User purple">
     <img className="imges" src="/icons8-user-90.png" alt="" />
     <img className="imges"  src="/icons8-bars-96.png" alt="" />
     <img className="imges"  src="/icons8-statistics-100.png" alt="" />
     <img className="imges"  src="/icons8-toolbox-100.png" alt="" />
     <img className="imges"  src="/icons8-logout-100.png" alt="" />
    </div>
    </div>
  )
}

export default App
