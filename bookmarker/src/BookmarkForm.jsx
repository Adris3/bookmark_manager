import { useState } from "react";

const BookmarkForm = () => {

    const [name, setName] = useState("")
    const [link, setLink] = useState("")

    return <form>
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

}