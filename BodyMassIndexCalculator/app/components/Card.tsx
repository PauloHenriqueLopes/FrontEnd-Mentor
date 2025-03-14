export function Card({title, text} : {title: string; text: string}) {
    return (
        <div className="">
            <div className="flex flex-col">
                <h2 className="text-gray-700 font-bold text-3xl">{title}</h2>
                <p className="text-gray-600 text-lg mt-10">{text}</p>
            </div>
        </div>
    )
}