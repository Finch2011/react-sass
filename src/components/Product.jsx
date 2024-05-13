import { Link } from 'react-router-dom'
function Product({ImgeSrc , Titel , Price}) {
  return (
    <>
    <div className="main-root" >
    <div className='root purple'>
      <div className='img-root'>
        <img src={ImgeSrc} alt="" />
      </div>
      <div className="text-root">
        <p className="titel">{Titel}</p>
        <div className="price-root">
        <p className="price">{Price}$</p>
        <div className="lokaition-root">
          <p>USA</p>
          <img className="lokaition-components" src="/icons8-location-100.png" alt="" />
          </div>
        </div>
      </div>
      <Link to={"/buying"}><button className="button-components purple">buy car</button></Link>
    </div>
    </div>
    </>

  )
}

export default Product
