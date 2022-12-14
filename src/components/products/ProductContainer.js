import { useState } from "react"
import { ProductList } from "./ProductList"
import { ProductSearch } from "./ProductSearch"
import { ProductForm } from "./ProductForm"


export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <ProductSearch setterFunction={setSearchTerms} />
    <ProductList searchTermState={searchTerms} />
    </>

}


// parent that maintains state of productlist and productform via props