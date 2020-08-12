import React from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row
} from "reactstrap"

function Cart( {cartItem,removeItem,buyNow } ) {
    let amount = 0;

    cartItem.forEach( item =>{
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return (
        <Container>
            <h1 className="text-success">Your Cart </h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key = {item.id}>
                        <Row>
                            <Col>
                            <img
                                height = {80}
                                src = {item.Image}
                            />
                            </Col>
                            <Col className="text-center">
                                <div className = "text-primary">
                                    {item.productName}
                                    <span>
                                        {item.productPrice}
                                    </span> 
                                    <Button color="danger"
                                    onClick={ () => removeItem(item)}>
                                        Remove    
                                    </Button>                                   

                                </div>
                            
                            </Col>
                        </Row>
                    </ListGroupItem>             

                )) }
            </ListGroup>
            {/* if ethe cart is empty */}

            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3" >
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} {cartItem.length >1 ? (<p>products</p>):( <p> product</p>)}
                            is                             
                            {amount}
                        </CardBody>
                        <CardFooter>
                            <Button color = "success" onClick = {buyNow}> Pay here!!</Button>
                        </CardFooter>
                    </Card>
                ):(
                    <h1 className="text-warning">Cart is empty !!</h1>
                )
            }



        </Container>
    )
}

export default Cart
