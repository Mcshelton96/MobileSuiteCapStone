import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const ProductEdit = () => {
    const [product, assignProduct] = useState({
        name: "",
        grade: "",
        type: "",
        price: 0
    })
    const { productId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/products/${productId}`)
            .then(response => response.json())
            .then((data) => {
                assignProduct(data)
            })
    }, [productId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/products/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
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
                                assignProduct(copy)
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
                                assignProduct(copy)
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
                                assignProduct(copy)
                            }}>
                            <option value="EG">EG</option>
                            <option value="HG">HG</option>
                            <option value="RG">RG</option>
                            <option value="MG">MG</option>
                            <option value="n/a">N/A</option>
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
                                assignProduct(copy)
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