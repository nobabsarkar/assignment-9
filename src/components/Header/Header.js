
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
      return (
            <div className="container">
                  <Navbar bg="light" expand="md">
                        <Container fluid>
                              <Navbar.Brand href="#">React-Router</Navbar.Brand>
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                          className="ms-auto me-end my-2 my-lg-0 header"
                                          style={{ maxHeight: '100px' }}
                                          navbarScroll
                                    >
                                          <Link to='/home'>Home</Link>
                                          <Link to='/quiz'>Quiz</Link>
                                          <Link to='/statistics'>Statistics</Link>
                                          <Link to='/blog'>Blog</Link>
                                    </Nav>

                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
}

export default Header;