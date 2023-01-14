import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext()
  
    const handleClick = () => {
      logout()
    }

    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link to="/">
                    <h1>home test</h1>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/blogs">
                    <h1>blogs</h1>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/flash">
                    <h1>flash</h1>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/sculptures">
                    <h1>sculptures</h1>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/music">
                    <h1>music</h1>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/collage">
                    <h1>collage</h1>
                </Link>
                </li>
                <li class="nav-item">
                
                </li>
                <li class="nav-item">
                <Link to="/about">
                    <h1>about</h1>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/shop">
                    <h1>shop</h1>
                </Link>
                </li>

                {user && (
                   <div>
                   <span>{user.email}</span>
                   <button onClick={handleClick}>Log out</button>
                 </div>
                )}
                {!user && (
                    <li class="nav-item">
                     <Link to="/login">Login</Link> 
                     <Link to="/signup">Signup</Link> 
                    </li>
                )}
            </ul>
            </div>
        </div>
    </nav>
)}
export default Navbar;