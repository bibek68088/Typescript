import { useContext } from "react";
import ProductsuseProductsContext from "../context/ProductsProvider";
import { UseProductsContextType } from "../context/ProductsProvider";

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsuseProductsContext)
}

export default useProducts