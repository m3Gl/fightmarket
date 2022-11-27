import { useEffect, useState } from "react"
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Products.css'
const Products =() => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMount = true

    console.log(filter);
   useEffect(()=> {

const getProducts = async() => {
setLoading(true)

const response = await fetch('https://fakestoreapi.com/products')
if (componentMount) {
    setData( await response.clone().json())
    setFilter(await response.json())
    setLoading(false)
}
return () => {
    componentMount = false
}

}
getProducts()

   }, [])

   const Loading = () => {
return (
    <>
    <p className="loading">Loading...</p>
        </>
    
)
   }
   const filterProduct = (category) => {
  const updateList = data.filter((x)=> x.category === category)
  setFilter(updateList)
   }
  const ShowProducts = () => {
    return (
        <>
        <div className="buttons">
            <button className="button" type="submit" onClick={()=> setFilter(data)} >All</button>
            <button className="button" type="submit" onClick={()=> filterProduct("men's clothing")}>Men's clothing</button>
            <button className="button" type="submit" onClick={()=> filterProduct("women's clothing")} >Women's clothing</button>
            <button className="button" type="submit" onClick={()=> filterProduct("jewelery")}>Jewelery</button>
            <button className="button" type="submit" onClick={()=> filterProduct("electronics")}>Electronics</button>

        </div>
       
            <div className="cards">
            {filter.map((product)=>{
           return(
            <>
                <div className="card" key={product.id}>
                    <div className="card-header">
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <div className="card-body">
                        <h3 className="title">{product.title.substring(0, 15)}...</h3>
                        <div className="other">
                            <span>{product.price}$</span>
                            <span>Rating:{product.rating.rate}</span>
                            

                        </div>
                    </div>
                    <div className="card-footer"> 
                        <a href={`/product/${product.id}`} ><FontAwesomeIcon icon={faShoppingCart}/>  Buy</a>
                    </div>
                </div>
                </>
                )
        })}
        
            </div></>
       
    )
   }
    return (
        <div className="products">
            <div className="container">
                <div className="rowTitle">
                    <div className="col">
                        <h2 className="title">Catalog</h2>
                        <hr/>
                    </div>
                </div>
                <div className="rowProducts">
                    <div className="col">
                        {loading ? <Loading/> :<ShowProducts/> }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products