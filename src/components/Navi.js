import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import netflix from './netflix.png';
function Navi() {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img className="Photo" src={netflix} alt ='netflix image' /></Navbar.Brand>
    <Navbar.Brand href="#home">Ciné</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Movies</Nav.Link>
      <Nav.Link href="#features">Series</Nav.Link>
      <Nav.Link href="#pricing">Manga/Anime</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Navi
