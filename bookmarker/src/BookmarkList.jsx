import React from "react"

const BookmarkList = ({bookmarks, updateBookmark, updateCallback}) => {
    const normalizeUrl = (url) => {
        if (!url) return "#"
        return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
    }

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_bookmark/${id}`, options)
            if (response.ok) {
                updateCallback?.()
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
                        <td>
                            <a href={normalizeUrl(bookmark.link)} target="_blank" rel="noreferrer" className="bookmark-link">
                                {bookmark.link}
                            </a>
                        </td>
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