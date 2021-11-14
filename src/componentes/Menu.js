import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen("isOpen");
    return(
        <div>
            <Navbar color="info" expand="md" dark>
                <Container>
                    <div className="d-flex">
                        <NavbarBrand href="/">
                            <h3>TI Academy</h3>
                        </NavbarBrand>

                        <NavbarToggler onClick={function noRefCheck(){}} />
                            <Collapse navbar>
                                <Nav className="me-auto" navbar>

                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>                                                     
                                    
                        </Nav>                            
                        </Collapse>
                    </div>
                </Container>                        
            </Navbar>
        </div>
    );
};