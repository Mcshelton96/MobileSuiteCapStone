import { Outlet, Route, Routes } from "react-router-dom"
import { ProductForm } from "../products/ProductForm"
import { ProductList } from "../products/ProductList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Mobile Suite</h1>
                    <div>Welcome to your suite, Pilot.</div>

                    <Outlet />
                </>
            }>

                <Route path="products" element={ <ProductList /> } />

                <Route path="product/add" element={ <ProductForm /> } />

            </Route>
        </Routes>
    )
}
