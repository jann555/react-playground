const CartPage = () =>{
    return (
        <div className="cart-container">
            <div>
                <table>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </table>
                
            </div>
            <hr></hr>
        </div>
    )
}
export default CartPage;