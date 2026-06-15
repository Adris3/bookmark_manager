import { useState } from "react";

const BookmarkForm = ({ onSuccess }) => {

    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            link
        }
        const url = "http://127.0.0.1:5000/create_bookmark"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200){
            const data = await response.json()
            alert(data.message)
        } else {
            setName("")
            setLink("")
            onSuccess?.()
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="link">Link:</label>
                <input 
                    type="text"
                    id="link" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)}
                />
            </div>
            <button type="submit">Create Bookmark</button>
        </form>
    );
};
export default BookmarkForm