import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand style={{display:"flex",justifyContent:"center"}}>Data Virtualization Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header