import { Input } from "./Input";

export function Header() {
    return(
        <div 
            className="grid grid-cols-7">
            <div 
                 className="-translate-x-10 rounded-b-3xl col-span-4 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center flex-col justify-center h-lvh">
                <h1 
                    className="block text-gray-700 font-bold text-6xl text-start pointer-events-none">
                    <span className="block">Body Mass</span>
                    <span className="block">Index Calculator</span>
                </h1>
                <p 
                    className="mt-9 text-gray-700 text-start max-w-md pointer-events-none">
                    Batter understand you weight in relation to your height using
                    our body mass index (BM) calculator. While BMI is not the 
                    sole determinant of a healthy weight, it offers a valuable 
                    starting point to evaluete your overall health and well-being.
                </p>
            </div>
            <div 
            className="absolute top-1/6 right-40 transform translate-y-1/2">
                <Input/>
            </div>
        </div>
    )
}