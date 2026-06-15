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
    const response = await fetch("http://127.0.0.1:5000/bookmarks")
    const data = await response.json()
    setBookmarks(data.bookmarks)
    console.log(data.bookmarks)
  }

  return (
    <>
      <BookmarkList bookmarks={bookmarks}/>
      <BookmarkForm onSuccess={fetchBookmarks} />
    </>
    )
}

export default App
