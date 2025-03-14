import { useState } from "react"

export function Input() {
    const [unit, setUnit] = useState("Metric");

    return (
        <div 
        className="flex bg-white rounded-2xl flex-col justify-center align-middle p-5 border-2 shadow-xl shadow-blue-300">
            <div>
                <h2  className="p-4 pointer-events-none text-gray-800 block font-semibold text-xl">Enter your deatails below</h2>
            </div>
            <div className="flex items-center gap-x-56 mt-5">
                <label className="flex items-center space-x-2">
                    <input
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full checked:bg-blue-700 checked:border-blue-700 transition-all duration-500"
                    type="radio"
                    name="unit"
                    id="Metric"
                    checked={unit === "Metric"}
                    onChange={() => setUnit("Metric")}
                    />
                    <span className="text-black font-bold">Metric</span>
                </label>

                <label className="flex items-center space-x-2">
                    <input
                    className="appearance-none w-6 h-6 border-2 border-black rounded-full checked:bg-blue-700 checked:border-blue-700 transition-all duration-500"
                    type="radio"
                    name="unit"
                    id="Imperial"
                    checked={unit === "Imperial"}
                    onChange={() => setUnit("Imperial")}
                    />
                    <span className="text-black font-bold">Imperial</span>
                </label>
            </div>
            <div className="flex gap-9 mt-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-4" htmlFor="height">Height</label>
                    <div className="flex items-center border-2 border-gray-700 p-3 rounded-xl">  
                        <input className="text-black text-lg p-1 font-bold bg-transparent outline-none placeholder:font-bold placeholder:text-xl placeholder:text-start focus:placeholder-transparent hover:placeholder:text-blue-500" placeholder="0" id="height" name="height" type="text"/>
                        <span className="text-blue-500 text-lg font-bold ml-2"> {unit === "Metric" ? "CM" : "IN"} </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-4" htmlFor="weight">Weight</label>
                    <div className="flex items-center border-2 border-gray-700 p-3 rounded-xl">
                        <input className="text-black text-lg p-1 font-bold outline-none bg-transparent placeholder:font-bold placeholder:text-xl placeholder:text-start focus:placeholder-transparent hover:placeholder:text-blue-500" placeholder="0" id="weight" name="weight" type="text"/>
                        <span className="text-blue-500 text-lg font-bold ml-2"> {unit === "Metric" ? "KG" : "LBS"} </span>
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 p-4 rounded-r-full rounded-l-lg pointer-events-none">
                <h2 className="text-white font-extrabold text-3xl p-5">Welcome!</h2>
                <p className="text-white pl-5">Enter your height and weight and you´ll see you BMI result here</p>
            </div>
        </div>
    )
}