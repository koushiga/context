import './App.css';
import Parent from './Parent';
import React,{useState} from 'react';

import { LoginContext } from './LoginContext';
import Profile from './Profile';
import Login from './Login';
import Product from './Product';
import ShowProduct from './ShowProduct';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timer from './Timer';


function App() {
  
  const[username,setUsername]=useState("")
  const[showprofile,setShowProfile]=useState(false);
  const[productName,setProductname]=useState("");
  const[productPrice,setProductPrice]=useState("");
  const[productQuantity,setProductQuantity]=useState("");
  const[productDes,setProductDes]=useState("");
  const[showProduct,setShowProduct]=useState(false);

  return (
    <div className="App">
      <Container>  
        <Row className='justify-content-md-center'>
          <Col> 
      <LoginContext.Provider value={{username,setUsername,setShowProfile,productName,setProductname,productPrice,
        setProductPrice,productQuantity,setProductQuantity,productDes,setProductDes,setShowProduct}}>
          {/* {showprofile?<Profile/>:<Login/>}  */}
          {showProduct?<ShowProduct/>:<Product/>}
      </LoginContext.Provider>
      {/* <Parent/> */}
      {/* <Timer/> */}
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
