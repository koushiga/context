import React,{useState,useContext} from "react";
import { LoginContext } from "./LoginContext";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Product(){

    const {setProductname,setProductPrice,setProductQuantity,setProductDes,setShowProduct}=useContext(LoginContext)

    return(
        <div className='card'>
            <Container>
                <h1>Product Details</h1>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">ProductName:</InputGroup.Text>
                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                setProductname(e.target.value)   
              }} />
              </InputGroup>
                 <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" >Price:</InputGroup.Text>
                        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                        setProductPrice(e.target.value)
                    }}/>
                 </InputGroup>
                     <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" >Quantity:</InputGroup.Text>
                            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                            setProductQuantity(e.target.value)
                        }} />
                    </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default" >Descripition:</InputGroup.Text>
                                <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(e)=>{
                                setProductDes(e.target.value)
                            }} />
                    </InputGroup>
                
                     <Button variant="primary" type="submit" onClick={()=>setShowProduct(true)}> Submit </Button>
                  
                 
            </Container>
                    </div>
    )
}

export default Product;