import { useState } from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const BlogForm = () => {
  const { dispatch } = useBlogsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [words, setWords] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const blog = {title, words, image}
    
    const response = await fetch('/api/v1/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setWords('')
      setImage('')
      dispatch({type: 'CREATE_BLOG', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Blog</h3>

      <label>title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>words:</label>
      <input 
        type="text" 
        onChange={(e) => setWords(e.target.value)} 
        value={words}
      />

      <label>image:</label>
      <input 
        type="text" 
        onChange={(e) => setImage(e.target.value)} 
        value={image} 
      />

      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default BlogForm;