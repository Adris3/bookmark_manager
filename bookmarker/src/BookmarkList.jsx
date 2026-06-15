import React from "react"

const BookmarkList = ({bookmarks, updateBookmark}) => { 
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_bookmark/${id}`, options)
            if (response.status === 2) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }

    return <div>
        <h2>Bookmarks</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Link</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {bookmarks.map((bookmark) => (
                    <tr key={bookmark.id}>
                        <td>{bookmark.name}</td>
                        <td>{bookmark.link}</td>
                        <td>
                            <button onClick={() => updateBookmark(bookmark)}>Update</button>
                            <button onClick={() => onDelete(bookmark.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default BookmarkList