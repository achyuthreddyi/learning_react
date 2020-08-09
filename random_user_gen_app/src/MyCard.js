import React from "react"
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import {FaEnvelope,FaMapMarked,FaPhone} from "react-icons/fa"

const MyCard = ({details}) =>{
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" 
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}/>
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2"> {details.name?.title}</span>
                        <span> {details.name?.first}</span>
                        <span> {details.name?.last}</span>
                     </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarked className="pr-2"/>
                    {details.location?.street.number}
                    <br/>
                    <FaPhone className="pr-2"/>
                    {details.phone}
                    <br/>
                    <FaEnvelope className="pr-2"/>
                    {details.location?.city}
                    

                </CardText>
             </CardBody>             
        </Card>
    )

}
export default MyCard;