
// 1. import createContext
import { createContext, useReducer } from 'react'

// 2. making a new context variable that references createContext()
export const BlogsContext = createContext()
// Creating context w/ react method createContext()
// referenced by our WorkoutsContext variable
// Context provides a way to pass data through the component tree
// without having to pass props down manually at every level.

// 3. custom reducer function containing our logic for actions and types
export const blogsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return { 
        blogs: action.payload 
      }
    case 'CREATE_BLOG':
      return { 
        blogs: [action.payload, ...state.blogs] 
      }
    case 'DELETE_BLOG':
      return { 
        blogs: state.blogs.filter(w => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

// Our CONTEXT PROVIDER COMPONENT
// Providing context to our application component tree ( App() )
// So our components can access it
// It's a regular react component, it will end up wrapping
// the rest of our application

// The destructured children property represents whatever 
// components or template component is accepting that property 
// wraps. In this case the children property represents our
// App() component that we wrapped inside the index.js file


// 4. contextProvider function 
export const BlogsContextProvider = ({ children }) => {
  // 5. extracting state and dispatch from passing in our
  // customerReducer into react's useReducer function
  const [state, dispatch] = useReducer(blogsReducer, { 
    // state of blogs begins as null
    blogs: null
  })

  // 6. returning our template of calling the Provider component
  // on our BlogsContext
  return (
    <BlogsContext.Provider value={{ ...state, dispatch }}>
        {/* So here we are outputting the root app component */}
      { children }
    </BlogsContext.Provider>
  )
};