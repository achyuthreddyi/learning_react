import React ,{useContext,useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,NavLink,
    NavbarText
} from "reactstrap"

import {Link} from "react-router-dom"
import {UserContext} from "../Context/UserContext"
// import SignUp from '../pages/SignUp'

function Header() {
    const context = useContext(UserContext)

    const [isOpen,setIsopen] = useState(false)

    const toggle = () => setIsopen(!isOpen)

    return (
        <Navbar color="info" light expand="md" >
            <NavbarBrand > 
                <Link to="/" className="text-white">LCO gitfire app </Link>
            </NavbarBrand>

                <NavbarText className="text-white"> {
                    // optional check
                    context.user?.email ? context.user.email:("")
                }</NavbarText>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>

                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={() => {context.setUser(null)}} className="text-white">
                                    logout
                                </NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink tag={Link} to="/signUp" className="text-white">
                                    Sign Up
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/signin" className="text-white">
                                    Sign In
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                    
                    
                </Nav>

            </Collapse>
        </Navbar>
    )
}

export default Header
