
import { useBlogsContext } from '../hooks/useBlogsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const BlogDetails = ({ blog }) => {

  const { dispatch } = useBlogsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    const response = await fetch('/api/v1/blogs/' + blog._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_BLOG', payload: json})
    }
  }

    return (
      
      <div className="blog-details">
        <h4>{blog.title}</h4>
        <p><strong>words: </strong>{blog.words}</p>
        <p><strong>image: </strong>{blog.image}</p>
        <p>{blog.createdAt}</p>
        {user &&   <span className="material-symbols-outlined" onClick={handleClick}>delete</span>}
      
      </div>
    )
};
  
export default BlogDetails