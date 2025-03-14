import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faCakeCandles, faDumbbell, faMarsAndVenus, faMoon, faPerson, faPersonPregnant } from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Card";


export function Article() {
    return(
        <div className="mt-12">
            <div className="grid grid-cols-7 gap-44 mt-52">
                <div className="rounded-3xl bg-gradient-to-r from-blue-100 to-blue-200 col-span-4 ml-20 relative justify-center">
                    <img src="../../public/noah-buscher-NGm1m8u59uk-unsplash-removebg-preview.png" alt="" className="absolute top-[-59%] left-1/2 transform -translate-x-1/2 object-contain w-96 h-auto"/>
                </div>
                <div className="col-span-3">
                    <h2 className="text-gray-700 text-6xl font-bold pb-4">What your BMI result means</h2>
                    <p className="text-gray-600 text-lg">
                        A BMI range of 18.5 to 24.9 is considered a 
                        &quot;healthy weight&quot;. Maintaining a healthy 
                        weight may lower your chances of 
                        experiencing health issues later on, such as 
                        obesity and type 2 diabetes. Aim for a 
                        nutritious diet with reduced fat and sugar 
                        content, incorporating ample fruits and 
                        vegetables. Additionally, strive for regular 
                        physical activity, ideally about 30 minutes 
                        daily for five days a week.
                    </p>
                </div>
            </div>
            <div className="p-10 mx-44 mt-52 grid grid-cols-9 gap-12 rounded-3xl place-items-center">
                <div className="col-span-3">
                    <div className="h-16 w-16 bg-pink-600 rounded-full bg-opacity-30 border-2 border-pink-500 flex justify-center items-center mb-10 text-center">
                        <FontAwesomeIcon icon={faBowlFood} className="text-pink-500 text-4xl" />
                    </div>
                    <Card title="Healthy eating" text="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity and mood "/>
                </div>

                <div className="col-span-3">
                    <div className="h-16 w-16 bg-orange-600 rounded-full bg-opacity-30 border-2 border-orange-500 flex items-center justify-center mb-10">
                        <FontAwesomeIcon icon={faDumbbell} className="text-orange-500 text-4xl" />
                    </div>
                    <Card title="Regular exercise" text="Exercice improves fitness, aids weight control, elevates mood and reduces disease risk, fostering wellness and longevity"/>
                </div>

                <div className="col-span-3">
                    <div className="h-16 w-16 bg-green-600 rounded-full bg-opacity-30 border-2 border-green-500 flex justify-center items-center mb-10 text-center">
                        <FontAwesomeIcon icon={faMoon} className="text-green-500 text-4xl" />
                    </div>
                    <Card title="Adequate sleep" text="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation"/>
                </div>
            </div>
            <div className="mt-48">
                <div className="flex gap-60 justify-center">
                    <div className="flex flex-col w-1/2">
                        <h1 className="text-gray-700 font-bold text-6xl">Limitations of BMI</h1>
                        <p className="text-gray-500 text-lg mt-8">
                            Although BMI is often a pratical indicator of healthy weight, it is not 
                            suited for every person. Specific groups should carefully consider their 
                            BMI outcomes, and in certain cases , the measurement may not be 
                            beneficial to use
                        </p>
                    </div>
                    <div className="flex gap-2 w-96 shadow-xl p-5 rounded-3xl shadow-blue-100">
                        <FontAwesomeIcon icon={faMarsAndVenus} className="text-orange-500 text-3xl"/>
                        <Card title="Gender" text="The development and body fat composition of grils and boys vary with age. Consequently, a clind's age and gender ate considered when evaluating their BMI"/>
                    </div>
                </div>
                <div className="flex my-16 justify-end gap-14 -translate-x-40">
                    <div className="flex gap-2 w-96 shadow-xl p-5 rounded-3xl shadow-blue-100">
                        <FontAwesomeIcon icon={faCakeCandles} className="text-cyan-400 text-3xl"/>
                        <Card title="Age" text="In againg individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."/>
                    </div>
                    <div className="flex gap-2 w-96 shadow-xl p-5 rounded-3xl shadow-blue-100">
                        <FontAwesomeIcon icon={faDumbbell} className="text-purple-500 text-3xl"/>
                        <Card title="Muscle" text="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat"/>
                    </div>
                </div>
                <div className="flex my-16 justify-center gap-14 translate-x-1">
                    <div className="flex gap-2 w-96 shadow-xl p-5 rounded-3xl shadow-blue-100">
                        <FontAwesomeIcon icon={faPersonPregnant} className="text-yellow-500 text-3xl"/>
                        <Card title="Pregnancy" text="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable tominimise health risks for both mother and child."/>
                    </div>
                    <div className="flex gap-2 w-96 shadow-xl p-5 rounded-3xl shadow-blue-100">
                        <FontAwesomeIcon icon={faPerson} className="text-pink-500 text-3xl"/>
                        <Card title="Race" text="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}