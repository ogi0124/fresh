import 안녕 from './data.js'
export default function Cart() {
    return(
        <div>
            <h4 className="title">Cart</h4>
            <CartItem/>
            <CartItem/>
            <안녕></안녕>
        </div>
    )
}

function CartItem(){
    return(
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}