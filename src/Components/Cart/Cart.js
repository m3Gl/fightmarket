import { useSelector, useDispatch } from "react-redux"
import { deleteCart } from "../../redux/action"
import './Cart.css'
const Cart = () => {

    const state = useSelector((state) => state.HandleCart)
    const dispatch = useDispatch()

    const handleDelete = (item) => {
        dispatch(deleteCart(item))
    }
    

    const cartItems = (cartItem) => {
      return (
        <div class="wrapper" key={cartItem.id}>
            <div class="project">
                <div class="shop">
                    <div class="box">
                        <img src={cartItem.image} alt='whoops'/>
                        <div class="content">
                            <h3>{cartItem.title}</h3>
                            <h4>{cartItem.price}$</h4>
                            <button class="btn-area fa fa-trash" onClick={()=> handleDelete(cartItem)}> </button>
                         

                        </div>
                       
                    </div>
                    
                    </div>
             
            </div>
                    </div>
      )
    }
    const emptyCart = () =>{
        return (
            <div className="col">
            <h2>Cart is empty!</h2>
        </div>
        )
       
    }

    const buttonCheckout = () => {
        return(
            <div className="col">
                <a href="/checkout" className="checkout">Proceed to checkout</a>
            </div>
        )
    }
    return (
        <div className='checkoutItems-container'>
        <div className="row">
            
            <div className="col">
                <div className="totalCart">
                    
                    <div className="totalInfo">
                    {state.length === 0 && emptyCart()}  
                   {state.length !== 0 && state.map(cartItems)}
                   {state.length !== 0 && buttonCheckout()}
                    </div>
                 
                </div>
            </div>
           
                
            </div>
            </div>
    )
}
export default Cart