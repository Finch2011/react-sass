import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
    <ul>
   <Link to={"/"}><li className="purple">Home</li></Link>
    <Link to={"/dd"}><li className="purple">CONTACT</li></Link>
    <Link to={"/shop"}><li className="purple">SHOP</li></Link>
     <a target="-blank" href="https://www.digikala.com/" ><li className="purple">ABOUT</li></a>
    </ul>
    <br />
    <hr />
    </>
    
  )
}

export default Navbar
