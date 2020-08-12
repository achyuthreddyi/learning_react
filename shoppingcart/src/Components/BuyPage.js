import React , {useState,useEffect} from 'react'
import Axios  from "axios";
import Carditem from "./CardItem"

import {random,commerce} from "faker"
import {Container , Col , Row } from "reactstrap"

const url = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10"
// const localurl  = ""

function BuyPage({addInCart}) {
    const [product , setProduct] = useState([])

    const fetchPhotos = async () =>{       

        const { data } = await Axios.get(url)

        console.log(data);

        const allProducts = data.map(photo => ({
            Image:photo.url,
            productName:photo.title,
            productPrice :commerce.price(),
            id:random.uuid()            
        }))
        setProduct(allProducts)
    }

        useEffect(() => {
            fetchPhotos()            
        }, [])
    
    return (
        <Container fluid> 
            <h1 className= "text-success text-center">
            Buy Page
            </h1>
            <Row>
                {product.map(prod => (
                    <Col md={4} key = {product.id}> 
                    <Carditem product={prod} addInCart={addInCart}/>
                    </Col>

                ))}
            </Row>
        </Container>
    )
}

export default BuyPage
