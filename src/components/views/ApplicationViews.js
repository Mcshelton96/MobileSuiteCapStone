// import { Outlet, Route, Routes } from "react-router-dom"
// import { ProductForm } from "../products/ProductForm"
// import { ProductList } from "../products/ProductList"
// import { PostForm } from "../posts/PostForm"


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

//                 <Route path="products" element={ <ProductList /> } />

//                 <Route path="products/add" element={ <ProductForm /> } />

//                 <Route path="posts/create" element={ <PostForm /> } />


//             </Route>
//         </Routes>
//     )
// }

import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"


export const ApplicationViews = () => {

	const localCapStoneUser = localStorage.getItem("capstone_user")
    const capstoneUserObject = JSON.parse(localCapStoneUser)
    
    if(capstoneUserObject.staff) {
        //return employee view
        return <EmployeeViews/>
    }
    else {
        //return customer View
        return <CustomerViews/>
    }
}