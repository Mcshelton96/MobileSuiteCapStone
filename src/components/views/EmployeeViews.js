import { Outlet, Route, Routes } from "react-router-dom"
import { ProductContainer } from "../products/ProductContainer"
import { ProductEdit } from "../products/ProductEdit"
import { ProductForm } from "../products/ProductForm"


export const EmployeeViews = () => {
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

                <Route path="products/add" element={<ProductForm />} />

                <Route path="products/:productId/edit" element={<ProductEdit />} />

            </Route>
        </Routes>
    )
}

// export const ApplicationViews = () => {
// 	return (
//         <Routes>
//             <Route path="/" element={
//                 <>
//                     <h1>Mobile Suite</h1>
//                     <div>Welcome to your suite, Pilot.</div>

//                     <Outlet />
//                 </>
//             }>