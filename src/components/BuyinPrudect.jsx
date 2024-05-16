function Buy({ ImgeSrc, Titel, Price }) {
    return (
        <>
         <div className="main-buy">
         <div className="buy">
            <img src="/021_tesla_model_3.jpg" alt="" />
            <div>
                <h1>Tesla S class 2021</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus modi assumenda voluptatem labore, sit, consequuntur accusantium doloribus impedit officia et inventore. Eaque quos blanditiis quo veritatis qui libero alias.</p>
            </div>
         </div>
      
         <div className="price">
            <div>
            <h2>set color :</h2>
            </div>
         <div className="setcolor">
            <div className="color-blue">
               <div></div>
            </div>
            <div className="color-red">
            <div></div>
            </div>
            <div className="color-yellow">
            <div></div>
            </div>
         </div>
            <div className="head-price">
            <h2>stors</h2>
            <img src="./icons8-buying.gif" alt="" />
            </div>
            <div className="item prpel">
                
            <div className="r-item">
                <h2>DigeKala</h2>
            </div>
            <p className="larnMore-buy">Lorem ipsum dolor sit amet </p>
            <div className="rb-item">
            <p className="price-buy">120,000$</p>
            <button className="button-buy">buy</button>
            </div>
            </div>
         </div>
         </div>
        </>
        )
}


export default Buy