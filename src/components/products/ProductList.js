import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Products.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [favorites, setFavorites] = useState(false)
    const navigate = useNavigate()

    const localCapStoneUser = localStorage.getItem("capstone_user")
    const capstoneUserObject = JSON.parse(localCapStoneUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            if (favorites) {
                const favoriteProducts = products.filter(product => product.favorite === true)
                setFilteredProducts(favoriteProducts)
            }
            else {
                setFilteredProducts(products)
            }
        },
        [favorites]
    )

    useEffect(
        () => {
            if (capstoneUserObject.staff) {
                //employees
                setFilteredProducts(products)
            }
            else {
                //customers
                const myProducts = products.filter(product => product.userID === capstoneUserObject.id)
                setFilteredProducts(myProducts)
            }
        },
        [products]
    )

    return <>
        {
            capstoneUserObject.staff
                ? <>
                    <button onClick={() => navigate("/product/add")}>Add New Product</button>
                    <button onClick={() => { setFavorites(false) }}>Products</button>
                </> 
                : <>
                    <button onClick={() => { setFavorites(true) }}>My Favorites</button>
                    <button onClick={() => { setFavorites(false) }}>Products</button>
                </>
        }

        <h2>Shop</h2>

        <article className="products">
            {
                products.map(
                    (product) => {
                        return <section key={product.id} className="product">
                            <header>{product.name}</header>
                            <footer>${product.price}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}