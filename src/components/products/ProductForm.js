import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [product, update] = useState({
        name: "",
        grade: "",
        type: "",
        price: 0
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
        const productToSendToAPI = {
            userId: capstoneUserObject.id,
            name: product.name,
            grade: product.grade,
            type: product.type,
            price: product.price
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
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
                    <label htmlFor="grade">Grade:
                        <select value={product.grade.value} onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.grade = evt.target.value
                                update(copy)
                            }}>
                            <option value="EG">EG</option>
                            <option value="HG">HG</option>
                            <option value="RG">RG</option>
                            <option value="MG">MG</option>
                            <option value="">N/A</option>
                        </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="grade">Type:
                        Select Product Type
                        <select value={product.type.value} onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.type = evt.target.value
                                update(copy)
                            }}>
                            <option value="kit">Kit</option>
                            <option value="tool">Tool</option>
                            <option value="paint">Paint</option>
                        </select>
                    </label>
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Add New Product
            </button>
        </form>
    )
}