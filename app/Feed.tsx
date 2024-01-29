"use client"

import { Data } from "@/shared/types"
import Product from "./Product"
import React, { useEffect, useState } from "react"

export default function Feed({data}: any) {
    const [productData, setProductData] = useState(data);
    useEffect(() => {
        setProductData(data);
    }, [])

    const handleBuy = async (productId: number) => {
        const res = await fetch(`/api/updateProducts`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: productId,
            }),
        });

        if(res.ok) {
            const updateData = productData.map((product: Data) => {
                if (product.id === productId) {
                    return { ...product, bought: !product.bought };
                }
                return product;
            })
            setProductData(updateData);
        } else console.log(res)
        return res.json();
    }

    const productFeed = productData.map((product: Data) => {
        return (
            <li key={product.id} className={`inline mb-6 mr-3 w-1/3`}>
                <Product
                    id={product.id}
                    title={product.title} 
                    data={product.data} 
                    price={product.price} 
                    bought={product.bought}
                    onBuy={handleBuy}
                />
            </li>
        )
    });

    return <ul className={`flex justify-around flex-wrap`}>{productFeed}</ul>;
}