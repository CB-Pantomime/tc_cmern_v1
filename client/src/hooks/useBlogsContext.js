
import { BlogsContext } from "../context/BlogsContext"
import { useContext } from "react"

// kustom hook!
export const useBlogsContext = () => {
    // useContext is now receiving the value of state  
    // and dispatch function
    // from the WorkoutsContext object
  const context = useContext(BlogsContext);

  if(!context) {
    throw Error('useBlogssContext must be used inside an BlogssContextProvider')
  };

  return context
};