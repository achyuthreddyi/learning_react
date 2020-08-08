import React,{ useState } from 'react';


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
    if(itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] && 
      itemArray[0] !== "empty"
      ){
        setWinmessage(`${itemArray[0]} wins`)
      } else if(itemArray[3] === itemArray[4] &&
        itemArray[3] === itemArray[5] && 
        itemArray[3] !== "empty"){
          setWinmessage(`${itemArray[0]} wins`)
        }else if(itemArray[6] === itemArray[7] &&
          itemArray[6] === itemArray[8] && 
          itemArray[6] !== "empty"){
            setWinmessage(`${itemArray[0]} wins`)
          }else if(itemArray[0] === itemArray[3] &&
            itemArray[0] === itemArray[6] && 
            itemArray[0] !== "empty"){
              setWinmessage(`${itemArray[0]} wins`)
            }else if(itemArray[1] === itemArray[4] &&
              itemArray[1] === itemArray[7] && 
              itemArray[1] !== "empty"){
                setWinmessage(`${itemArray[0]} wins`)
              }else if(itemArray[2] === itemArray[5] &&
                itemArray[2] === itemArray[8] && 
                itemArray[2] !== "empty"){
                  setWinmessage(`${itemArray[0]} wins`)
                }else if(itemArray[0] === itemArray[4] &&
                  itemArray[0] === itemArray[8] && 
                  itemArray[0] !== "empty"){
                    setWinmessage(`${itemArray[0]} wins`)
                  }else if(itemArray[2] === itemArray[4] &&
                    itemArray[2] === itemArray[6] && 
                    itemArray[2] !== "empty"){
                      setWinmessage(`${itemArray[0]} wins`)
                    }
            


  }

  const changeItem = itemNumber =>{
    if(winmessage){
      return toast(winmessage , { type:"success"} )
    }
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)     
            
    }
    else{
      return toast("already filled" , {type : "error"})
      
    }
    checkisWinner()

  }


  return (

    <Container className = "p-5">
      <ToastContainer position = "bottom-center"/>
      <Row>
        <Col md = {6} className = "offset-md-3">
          {winmessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winmessage}
              </h1>
              <Button
              color="success"
              block
              onClick={reloadGame}>
                Reload the game
                </Button>
              </div>
          ) : (
            <h1 className = "text-center text-warning">
              {isCross ? "Cross": "Circle"} turns
            </h1>
          ) }

          <div className = "grid">
            {itemArray.map((item,index)=>(
              <Card color="warning"  onClick = { () => changeItem(index) }>
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
