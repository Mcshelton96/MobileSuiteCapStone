import { Outlet, Route, Routes } from "react-router-dom"
import { PostForm } from "../posts/PostForm"
import { ProductContainer } from "../products/ProductContainer"


export const CustomerViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Mobile Suite</h1>
                    <div>Welcome to your suite, Pilot.</div>

                    <Outlet />
                </>
            }>

                <Route path="products" element={<ProductContainer />} />
                
                <Route path="posts" element={<PostForm />} />

            </Route>
        </Routes>
    )
}