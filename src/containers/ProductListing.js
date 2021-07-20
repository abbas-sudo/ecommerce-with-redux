import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../src/reedux/actions/productAction';
import axios from "axios"
import ProductComponents from './ProductComponents';


const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
        console.log(response.data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="ui grid container">
            <ProductComponents />
        </div>
    )
}

export default ProductListing
