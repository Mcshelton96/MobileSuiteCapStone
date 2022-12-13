import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {UploadAndDisplayImage} from "./ImageUpload"

export const PostForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [post, update] = useState({
        description: "",
        Date: 0,
        Image: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

    const navigate = useNavigate()

    const localCapStoneUser = localStorage.getItem("capstone_user")
    const capstoneUserObject = JSON.parse(localCapStoneUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("button clicked")

        // TODO: Create the object to be saved to the API
        const postToSendToAPI = {
            userId: capstoneUserObject.id,
            description: post.description,
            Date: post.date
           }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch (`http://localhost:8088/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postToSendToAPI)
        } )
            .then(resonse => resonse.json())
            .then(() => {
                navigate("/posts")
            })
        
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Post Description"
                        value={post.description}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            {/* <fieldset>
                                    add image section here
            </fieldset> */}
            <fieldset>
                <div className="form-group">
                    <label>
                        Select Tag for Post
                        <select value={post.tag.value} onChange={post.handleChange}>
                            <option value="beginner">Beginner</option>
                            <option value="help">Help</option>
                            <option value="discussion">Discussion</option>
                        </select>
                    </label>
                    <input
                        required autoFocus
                        type="submit"
                        value={post.tag}
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.tag = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Add New Post
            </button>
        </form>
    )
}