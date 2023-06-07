export default function Filter() {
    return (
        <div className={`flex gap-x-12 mt-10 mb-5`}>
            <div className={`inline font-bold`}>filtr:</div>
            <ul className={`[&>*]:inline [&>*]:cursor-pointer [&>*]:before:content-['▼'] [&>*]:before:text-[0.6rem] [&>*]:before:mr-1 space-x-10`}>
                <li>kategorie</li>
                <li>kolekcje</li>
                <li>materiały</li>
                <li>cena</li>
            </ul>
        </div>
    )
}