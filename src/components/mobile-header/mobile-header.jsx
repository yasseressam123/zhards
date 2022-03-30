import { Navbar, Nav,Container } from 'react-bootstrap';

const MobileHeader = ()=>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">Zhards.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Dashboard</Nav.Link>
                    <Nav.Link href="#action2">Blog Post</Nav.Link>
                    <Nav.Link href="#action2">Message</Nav.Link>
                    <Nav.Link href="#action2">Statistics</Nav.Link>
                    <Nav.Link href="#action2">Settings</Nav.Link>
                    <Nav.Link href="#action2">Log Out</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}

export default MobileHeader;