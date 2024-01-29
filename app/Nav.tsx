import Link from "next/link";
import Image from "next/image";
import leyendecker from '../public/LeyendeckerGaleria.svg';

export default function Nav() {
    return (
        <div className={`flex flex-col justify-center md:flex-row md:justify-between`}>
            <div className={`inline-block`}>
                <Image 
                    src={leyendecker}
                    width={600}
                    height={600}
                    alt='logo'
                />
            </div>
            <div className={`flex justify-end`}>
                <nav className={`inline w-min m-auto`}>
                    <ul className={`space-x-12 flex justify-between text-xl`}>
                        <Link href='/'>home</Link>
                        <Link href='/store'>sklep</Link>
                        <Link href='/cart'>koszyk</Link> 
                    </ul>
                </nav>
            </div>
        </div>
    )
}