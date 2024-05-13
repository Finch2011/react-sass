import Product from "./components/Product"

// import { Link } from 'react-router-dom'
function App() {
 

  return (
    
    <div className="main-App">
    <div className="App">
     <h1 className="welcom-text">Welcome To <span className="sass-text purple ">Sass</span> 101</h1>    
     <p className="larnMore-text">The best pre-proccesor for css</p>
     <br />
     <button className="button-App purple">Larn More</button>
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
