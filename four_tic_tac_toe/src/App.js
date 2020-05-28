import React,{useState} from 'react';


import Icon from "./components/icon"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody,Container,Button,Col,Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty")

const App = () =>{

  const [isCross,setIsCross] =  useState(false)
  const [winmessage,setWinmessage] = useState("")

  const reloadGame = ()=>{
    //  setting all the states to default
    setIsCross(false)
    setWinmessage("")
    itemArray.fill("empty",0,9)
  }

  const checkisWinner = () =>{

  }

  const changeItem = itemNumber =>{

  }
  return (

    <Container className = "p-5">
      <ToastContainer position = "bottom-center"/>
      <Row>
        <Col md = {6} className = "offset-md-3">
          <div className = "grid">
            {itemArray.map((item,index)=>(
              <Card>
                <CardBody className = "box">
                  <Icon name = {item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
 
  );
}

export default App;
