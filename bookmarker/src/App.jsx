import { useState, useEffect } from 'react'
import BookmarkList from './BookmarkList'
import './App.css'
import BookmarkForm from './BookmarkForm'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    fetchBookmarks()
  }, [])

  const fetchBookmarks = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setBookmarks(data.contacts)
    console.log(data.contacts)
  }

  return (
    <>
      <BookmarkList bookmarks={bookmarks}/>
      <BookmarkForm/>
    </>
    )
}

export default App
