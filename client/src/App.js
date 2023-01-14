
import { BrowserRouter, 
  Routes, 
  Route
  , 
  Navigate
 } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// Pages 
import Home from './pages/Home'
// import Blogs from './pages/Blogs'
import About from './pages/About'
import Flash from './pages/Flash'
import Music from './pages/Music'
import Sculptures from './pages/Sculptures';
import Collage from './pages/Collage';
import Shop from './pages/Shop'
import Scroll from './pages/Scroll';
// import Navbar from './components/Navbar'

// import NewNavbar from './components/NewNavbar'

// Auth
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
// Nav Updated 12/15/22
import RbsNavBar from './components/RbsNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
     <BrowserRouter>
        <RbsNavBar />
        <div className="pages">
          <Routes>
          <Route 
              path="/" 
              element={<Home />} 
            />
          <Route 
              path="/blogs" 
              element={<Scroll />} 
            />
          <Route 
              path="/flash" 
              element={<Flash />} 
            />
             <Route 
              path="/sculptures" 
              element={<Sculptures />} 
            />
             <Route 
              path="/music" 
              element={<Music />} 
            />
             <Route 
              path="/collage" 
              element={<Collage />} 
            />
          <Route 
            path="/about" 
            element={<About />} 
            />
          <Route 
            path="/shop" 
            element={<Shop />} 
            />

          {/* AUTH */}
          <Route 
            path="/signup" 
            element={<Signup />} 
            />
            {/* update endpoint to isthisalife */}
          <Route 
            path="/login" 
            element={!user ? <Login/> : <Navigate to='/blogs' />} 
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;