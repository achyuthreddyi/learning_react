import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserCard";
import RepoCard from "../Components/RepoCard";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";


function Home() {

    const context = useContext(UserContext)
    const [query,setQuery] = useState('')
    const [user,setUser] = useState('')

    const fetchDetails = async () =>{
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            console.log(data);
            setUser(data)
            // setUser(await Axios.get(`https://api.github.com/users/${query}`).data)
            
        } catch (error) {
            toast("Not able to locate the user",{
                type:"error"
            })
            
        }
    }

    // put any page behind login

    if(!context.user?.uid){
        return <Redirect to ="/signin" /> 
    }else {

    

    return (
        <Container>
        <Row className=" mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Please provide the username"
              />
              <InputGroupAddon addonType="append">
                <Button onClick={fetchDetails} color="primary">Fetch User</Button>
              </InputGroupAddon>

            </InputGroup>

            {user ? <UserCard user={user}/>:null}

          </Col>
          <Col md="7">

              {user ? <RepoCard repos_url={user.repos_url} />: null}
          </Col>
        </Row>
      </Container>
    )
    }
}

export default Home
