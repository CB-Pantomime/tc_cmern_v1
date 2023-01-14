
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
    <header>
      <div className="container">
        <Link to="/">
            <h1>home</h1>
          </Link>
          <Link to="/blogs">
            <h1>blogs</h1>
          </Link>
          <Link to="/flash">
            <h1>flash</h1>
          </Link>
          <Link to="/sculptures">
            <h1>sculptures</h1>
          </Link>
          <Link to="/music">
            <h1>music</h1>
          </Link>
          <Link to="/collage">
            <h1>collage</h1>
          </Link>
          <Link to="/about">
            <h1>about</h1>
          </Link>
          <Link to="/shop">
            <h1>Shop</h1>
          </Link>
            <nav>
                {user && (
                  <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                  </div>
                )}
                  {!user && (
                  <div>
                    {/* TO BE REFACTORED/REMOVED */}
                     <Link to="/login">Login</Link> 
                     <Link to="/signup">Signup</Link> 
                  </div>
                )}
            </nav>      
      </div>
    </header>
  )
};

export default Navbar;