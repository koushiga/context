import React,{useContext} from "react";
import Card from 'react-bootstrap/Card';
import { LoginContext } from "./LoginContext";

function ShowProduct(){
    
    const {productName,productQuantity,productDes,productPrice}=useContext(LoginContext);

    return(
        <div className="product-card"> 
            <Card style={{ width: '18rem' }}>
                    <h2>Display Products</h2>
                    <p><strong>Product Name</strong> : {productName}</p>
                    <p><strong>Product Price</strong> : {productPrice}</p>
                    <p><strong>Quantity </strong>: {productQuantity}</p>
                    <p><strong>Description</strong> : {productDes}</p>
            </Card>
        </div>
    );
}

export default ShowProduct;