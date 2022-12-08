import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [product, update] = useState({
        name: "",
        price: 0,
        type: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

    const localCapStoneUser = localStorage.getItem("capstone_user")
    const capstoneUserObject = JSON.parse(localCapStoneUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("button clicked")

        // TODO: Create the object to be saved to the API
        const productToSendToAPI = {
            userId: capstoneUserObject.id,
            name: product.name,
            price: product.price,
            type: product.type
           }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch (`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        } )
            .then(resonse => resonse.json())
            .then(() => {
                navigate("/products")
            })
        
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of Product"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Price of Product"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.price = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label>
                        Select Product Type
                        <select value={product.type.value} onChange={product.handleChange}>
                            <option value="kit">Kit</option>
                            <option value="tool">Tool</option>
                            <option value="paint">Paint</option>
                        </select>
                    </label>
                    <input
                        required autoFocus
                        type="submit"
                        value={product.type}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.type = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Add New Product
            </button>
        </form>
    )
}