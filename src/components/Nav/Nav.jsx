import React from 'react';
import {Navbar,Container} from "react-bootstrap"
function Nav() {
    return (
        <Navbar bg="primary" className={"shadow"}>
            <Container>
                <Navbar.Brand href="#home" className={"text-capitalize text-white fw-bold"}>Meme Generator</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Nav;