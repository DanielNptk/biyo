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
                width={0}
                height={0}
                alt={props.title}
                style={{ width: '70%' }}
            />
            <div className={`flex justify-between`}>
                <div className={`inline w-[auto]`}>
                    <p className={`text-xl`}>{props.title}</p>
                    <p className={`text-stone-500`}>{props.price}zł</p>
                </div>
                <button onClick={handleBuy} className={`text-xl hover:font-bold border-solid border-2 border-black px-10`}>{props.bought ? 'Dzięki' : 'Kup'}</button>
            </div>
        </div>
    )
}