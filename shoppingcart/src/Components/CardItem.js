import React from 'react'
import { Card , CardImg,CardText,CardBody,CardTitle,Button } from "reactstrap"
 
function CardItem( {product , addInCart} ) {
    return (
        <Card className="mt-2 mb-1">
            <CardImg 
            top
            height="250"
            width="100%"
            src={product.Image}
            />
            <CardBody className="text-center">
                <CardTitle className="text-center">{product.productName}</CardTitle>
                <CardText className="secondary">price : RS {product.productPrice}</CardText>                
                <CardText> id: {product.id} </CardText> 
                <Button
                color="success"
                onClick={() =>{addInCart(product)}}
                > BUY NOW !!</Button>               
            </CardBody>            
        </Card>
    )
}

export default CardItem
