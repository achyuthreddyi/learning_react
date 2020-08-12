import React , {useState}from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import './App.css';



import {Container, Row , Col} from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';

//importing components
import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {
  const [cardItem,setCardItem] = useState([])
  

  const addInCart = item =>{
    const isAlreadyAdded = cardItem.findIndex( function(array){
      return array.id === item.id
    })
    if(isAlreadyAdded !== -1){
      toast("already added in the cart",{
        type:"error"
      })
      return;
    }
    setCardItem([...cardItem,item])
  }

  const buyNow = () =>{
    setCardItem([])
    toast(" purchase complete!!",{
      type: "success"
    })
  }

  const removeItem = item =>{
    setCardItem( cardItem.filter(singleItem => singleItem.id != item.id ))
  }


  return (
   <Container fluid>
     <ToastContainer/>
     <Row>

       <Col md="8" >
         <BuyPage addInCart={addInCart}/>
       </Col>

       <Col md="4">
         <Cart cartItem = {cardItem}  removeItem={removeItem} buyNow = {buyNow}/>
       </Col>

     </Row>

    
   </Container>
  );
}

export default App;
