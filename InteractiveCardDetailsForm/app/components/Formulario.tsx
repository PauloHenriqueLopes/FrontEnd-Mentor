import { Form } from "@remix-run/react";

export function Formulario() {
    return (
        <Form className="flex justify-center mt-80 lg:mt-48 lg:ml-32 2xl:mt-80">
            <div className="w-1/3 md:w-1/2 2xl 2xl:w-2/5">
                <div className="flex flex-col items-center my-8">
                    <label htmlFor="name" className="text-black self-start font-mono font-semibold">CARDHOLDER NAME</label>
                    <input type="text" name="name" id="name" className="bg-white border-2 border-gray-400 w-full rounded-lg p-2 text-black focus:border-purple-700 focus:outline-none"  placeholder="e.g. Jane Appleseed"/>
                </div>
                <div className="flex flex-col items-center my-8">
                    <label htmlFor="cardNumber" className="text-black self-start font-semibold font-mono">CARD NUMBER</label>
                    <input type="text" name="cardNumber" id="cardNumber" className="bg-white border-2 border-gray-400 w-full p-2 rounded-lg text-black focus:border-purple-700 focus:outline-none" placeholder="e.g. 1234 5678 9123 0000"/>
                </div>
                <div className="flex flex-col my-8">
                    <div className="flex lg:gap-x-44 2xl:gap-x-64">
                        <label htmlFor="date" className="text-black font-semibold font-mono">EXP. DATE(MM/YY)</label>
                        <label htmlFor="cvc" className="text-black font-semibold font-mono lg:ml-1">CVC</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="text" name="mm" className="bg-white border-2 border-gray-400 rounded-lg p-2 w-32 text-black focus:border-purple-700 focus:outline-none" placeholder="MM"/>
                        <input type="text" name="yy" className="bg-white border-2 border-gray-400 rounded-lg p-2 w-32 mr-8 2xl:mr-9 text-black focus:border-purple-700 focus:outline-none" placeholder="YY"/>
                        <input type="text" name="cvc" className="bg-white border-2 border-gray-400 rounded-lg p-2 ml-12 w-44 lg:ml-5 2xl:ml-24 text-black focus:border-purple-700 focus:outline-none" placeholder="e.g. 123"/>
                    </div>
                </div>
                <button className="bg-purple-900 w-full p-4 rounded-xl my-6 text-lg font-semibold">CONFIRM</button>
            </div>
        </Form>
    );
}