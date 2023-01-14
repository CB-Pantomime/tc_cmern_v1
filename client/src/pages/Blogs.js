
// NOT USING THIS PAGE AS OF 12/07/22
// MAY RETURN TO THIS PROGRAM AT A LATER DATE
// WHEN REFACTORING FOR CLIENT NEEDS
import { useEffect, Fragment } from "react"
import { useBlogsContext } from "../hooks/useBlogsContext"
import { useAuthContext } from '../hooks/useAuthContext'

// components
import BlogDetails from "../components/BlogDetails"
import BlogForm from "../components/BlogForm"

const Blogs = () => {
  const { blogs, dispatch } = useBlogsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/v1/blogs');
      const json = await response.json();
      if (response.ok) {
        dispatch({type: 'SET_BLOGS', payload: json});
      };
    };
    fetchBlogs();
  }, [dispatch, blogs]);

  return (
      <div className="home">

        {/* Returns for public */}
    {!user &&  <div className="blogs">
      {blogs && blogs.map(blog => (
        <BlogDetails blog={blog} key={blog._id} />
          ))}
        </div>
        }
        
      {/* Returns for auth/logged in */}
    {user && 
    <Fragment>
        <div className="blogs">
        {blogs && blogs.map(blog => (
          <BlogDetails blog={blog} key={blog._id} />
            ))}
          </div>
            <BlogForm />
    </Fragment>}
  </div>

)};

export default Blogs