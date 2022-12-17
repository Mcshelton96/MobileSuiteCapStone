import { Link } from "react-router-dom"

export const Product = ({ productObject, currentUser, getAllProducts }) => {



    const deleteButton = () => {
        if (currentUser.staff) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/products/${productObject.id}`, {
                    method: "DELETE"
                })

                    .then(() => {
                        getAllProducts()
                    })
            }} className="product_delete">Delete</button>
        }
        else {
            return ""
        }
    }

    return <section key={productObject.id} className="product">
        <header>
            {
                currentUser.staff
                    ? <Link to={`/products/${productObject.id}/edit`}>Edit: {productObject.name}</Link>
                    : `Product ${productObject.id}`
            }
        </header>
        <section>{productObject.name}</section>
        <section>{productObject.grade}</section>
        <section>{productObject.price}</section>
        <footer className="ticket_footer">
            {
                deleteButton()
            }
        </footer>
    </section>

}