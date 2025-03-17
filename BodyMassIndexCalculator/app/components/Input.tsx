import { Form } from "@remix-run/react";
import { useState } from "react"

export function Input() {
    const [unit, setUnit] = useState("Metric");
    const [imc, setImc] = useState(Number(0));
    const [idealMax, setMax] = useState(Number(0));
    const [idealMin, setMin] = useState(Number(0));

    const onChange = (event: { currentTarget: HTMLFormElement | undefined; })=> {
        const formData = new FormData(event.currentTarget);
        const height = Number(formData.get('height')) 
        const weight = Number(formData.get('weight'))
        setImc(Number(0));
        if(height > 0 && weight > 0) {
            if(unit === 'Metric') {
                const imc = weight / ((height / 100) * (height / 100))
                setImc(Number(imc.toFixed(2)))
                if(imc > 29.9 || imc < 18.5) {
                    const minWeight = 18.5 * ((height / 100) ** 2);
                    const maxWeight = 24.9 * ((height / 100) ** 2);
                    setMax(Number(maxWeight.toFixed(2)));
                    setMin(Number(minWeight.toFixed(2)));
                }
            } else {
                const imc = (weight * 703) / (height * height)
                if(imc > 29.9 || imc < 18.5) {
                    const minWeight = 18.5 * (height ** 2) / 703;
                    const maxWeight = 24.9 * (height ** 2) / 703;
                    setMax(Number(maxWeight.toFixed(2)));
                    setMin(Number(minWeight.toFixed(2)));
                }
                setImc(Number(imc.toFixed(2)))
            }
            console.log(idealMin, idealMax);
                        
        }
    }

    return (
        <Form  
        onChange = {onChange}   
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
                <h2 className="text-white font-extrabold text-3xl p-5">{imc == 0 ? "Welcome" : `${imc}`}</h2>
                <p className="text-white pl-5">
                    {imc == 0 
                        ? "Enter your height and weight and you´ll see your BMI result here" 
                        : imc < 18.5 ? `Your BMI suggests you re underweight. Your ideal weight is between ${idealMin} ${unit === "Metric" ? "KG" : "LBS"} - ${idealMax} ${unit === "Metric" ? "KG" : "LBS"}.`
                        : imc < 25 ? `Your BMI suggests you're a healthy weight. Your ideal weight is between  ${idealMin} ${unit === "Metric" ? "KG" : "LBS"} - ${idealMax} ${unit === "Metric" ? "KG" : "LBS"}.` 
                        : imc < 30 ? `Your BMI suggests you're overweight. Your ideal weight is between ${idealMin} ${unit === "Metric" ? "KG" : "LBS"} - ${idealMax} ${unit === "Metric" ? "KG" : "LBS"}.`
                        : imc < 35 ? `Your BMI suggests you're in obesity class 1. Your ideal weight is between ${idealMin} ${unit === "Metric" ? "KG" : "LBS"} - ${idealMax} ${unit === "Metric" ? "KG" : "LBS"}.`
                        : imc < 40 ? `Your BMI suggests you're in obesity class 2. Your ideal weight is between ${idealMin} ${unit === "Metric" ? "KG" : "LBS"} - ${idealMax} ${unit === "Metric" ? "KG" : "LBS"}.`
                        : `Your BMI suggests you're in obesity class 3. Your ideal weight is between ${idealMin} ${unit === "Metric" ? "KG" : "LBS"} - ${idealMax} ${unit === "Metric" ? "KG" : "LBS"}.`
                    }
                </p>
            </div>
        </Form>
    )
}