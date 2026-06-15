import React from "react"

const BookmarkList = ({bookmarks}) => {
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
                {bookmarks.map((boomark) => (
                    <tr key={bookmark.id}>
                        <td>{bookmark.name}</td>
                        <td>{bookmark.link}</td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}