import { Link } from 'react-router-dom'
function notfund() {
 

  return (
    <div className='main404'>
    <h1> <span className='h1'>Erore</span> 404 🤦‍♂️</h1>
    <p className='GoToHome'><Link to={"/"}>Go To Home</Link></p>
    </div>
  )
}

export default notfund
