// react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// user sign i/o, auth
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext'

function RbsNavBar() {

    const { logout } = useLogout();
    const { user } = useAuthContext()
  
    const handleClick = () => {
      logout()
    }

  return (
    <Container className='nav-container'>
        <Navbar bg="light" expand="lg" >
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dxov7pk4a/image/upload/v1671057890/tc_flash/IMG_5204_oysi7g.jpg"
              width="30"
              height='auto'
              className="d-inline-block align-right"
              alt="an old mouse"
            />
          </Navbar.Brand>
                <Nav.Link href="blogs">scroll</Nav.Link>
                <Nav.Link href="collage">collage</Nav.Link>
                <Nav.Link href="flash">flash</Nav.Link>
                <Nav.Link href="music">music</Nav.Link>
                <Nav.Link href="sculptures">sculptures</Nav.Link>
                <Nav.Link href="about">about</Nav.Link>
                <Nav.Link href="shop">shop</Nav.Link>

                {user && (
                  <div className="style-logout">
                    {/* <span>{user.email}</span> */}
                    <button onClick={handleClick}>log out</button>
                  </div>
                )}
                {/* {!user && (
                  <div className="me-auto">
                     <Nav.Link to="/login">Login</Nav.Link> 
                    <Nav.Link to="/signup">Signup</Nav.Link> 
                  </div>
                )} */}
                
                <Container>
         
        </Container>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </Container>
  );
}

export default RbsNavBar;