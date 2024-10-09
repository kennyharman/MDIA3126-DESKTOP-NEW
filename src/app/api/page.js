"use client"
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    /**
     * Create a header
     * Create a button that requests data
     * Request some data
     * Store the data in my state (react state)
     * Output the data
     */

    const [products, setProducts] = useState(null);
    const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

     async function fetchProducts() {
        const response = await fetch (API_ENDPOINT)
        /**
         * waiting for the response
         * taking the response and assigning it to another variable
         */
        console.log("DUPER" + response)
        const data = await response.json();
        console.log("DUPER" + data)

        setProducts();
    }

    const ProductList = () => {
        return (
            <div className="border-4 border-black p-4 mb-4">
                Products will go here!
            </div>
        )
    }

    return (
        <div className="bg-yellow-300 p-4">
            <header className="border-4 border-black p-4 mb-4">
                <h1 className="text-4xl mb-6 text-yellow-700">
                    Welcome to this product page!
                </h1>
                <button className="border-black border-2 p-2 bg-black text-yellow-300">
                    Fetch some products!
                </button>
            </header>
            <ProductList/>
        </div>
    );
}