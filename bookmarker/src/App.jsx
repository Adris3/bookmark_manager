import { useState, useEffect } from 'react'
import BookmarkList from './BookmarkList'
import './App.css'
import BookmarkForm from './BookmarkForm'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)


  useEffect(() => {
    fetchBookmarks()
  }, [])

  const fetchBookmarks = async () => {
    const response = await fetch("http://127.0.0.1:5000/bookmarks")
    const data = await response.json()
    setBookmarks(data.bookmarks)
    console.log(data.bookmarks)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  return (
    <>
      <BookmarkList bookmarks={bookmarks}/>
      <button onClick={openCreateModal}>Create new bookmark</button>
      {
        isModalOpen && <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <BookmarkForm onSuccess={fetchBookmarks} />
          </div>
        </div>

      }
      
    </>
    )
}

export default App
