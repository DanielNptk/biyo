"use client"

import Image from "next/image";

export default function Product(props: {id: number; data: string; title: string; price: string; bought: boolean; onBuy: any}) {
    const handleBuy = () => {
        props.onBuy(props.id);
    }

    return(
        <div>
            <Image 
                src={props.data}
                width={400}
                height={400}
                alt={props.title}
            />
            <div className={`flex justify-between`}>
                <div>
                    <p className={`text-lg`}>{props.title}</p>
                    <p className={`font-bold`}>{props.price}zł</p>
                </div>
                <button onClick={handleBuy} className={`text-xl hover:font-bold`}>{props.bought ? 'dzięki' : 'kup'}</button>
            </div>
        </div>
    )
}