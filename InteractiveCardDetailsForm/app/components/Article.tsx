import { Formulario } from "./Formulario";

export function Article() {
    return(
        <div className="grid grid-cols-12 w-full min-h-screen">
            <div className="bg-gradient-to-r from-purple-500 to-purple-900 col-span-4 h-full"></div>
            <div className="bg-white col-span-8 relative h-full">
                {/* Frente Cartao */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl md:w-2/3 md:h-56 absolute md:-translate-x-60 md:translate-y-36 lg:translate-y-36 lg:w-2/5 lg:-translate-x-72 lg:h-60 2xl:w-2/6 2xl:translate-y-72 2xl:h-72">
                    <div className="flex justify-start p-4 gap-3">
                        <div className="bg-white rounded-full w-10 h-10"/>
                        <div className="border-2 border-white rounded-full h-5 w-5 translate-y-3"/>
                    </div>
                    <div className="flex justify-center w-full mt-20 md:mt-16 2xl:mt-20">
                        <p className="text-2xl font-semibold w-full text-center tracking-[0.5rem] md:tracking-[0.1rem] lg:tracking-[0.4rem] 2xl:tracking-[0.7rem] pointer-events-none">0000 0000 0000 0000</p>
                    </div>
                    <div className="flex justify-between px-7 md:px-4 mt-12 md:mt-6 lg:mt-10 2xl:mt-16">
                        <p className="text-white font-medium pointer-events-none">JANE APPLESEED</p>
                        <p className="text-white font-medium pointer-events-none">00/00</p>
                    </div>
                </div>

                {/* Traseira Cartao */}
                <div className="bg-gradient-to-r from-slate-300 to-slate-500 md:w-2/3 md:h-56 rounded-xl md:mt-12 absolute md:top-[1rem] md:-translate-x-48 lg:translate-y-60 lg:top-[10rem] lg:w-2/5 lg:-translate-x-60 lg:mt-10 lg:h-60 2xl:w-1/3 2xl:top-[20rem] 2xl:mt-14 2xl:h-72">
                    <div className="bg-gray-700 w-full h-12 translate-y-5 border-2 border-gray-700" />
                    <div className="flex justify-center">
                        <div className="bg-gray-500 h-8 w-2/3 mt-14 rounded-lg">
                            <p className="text-end text-white text-lg pr-4 pt-1 pointer-events-none">000</p>
                        </div>
                    </div>
                </div>

                {/* Formulario */}
                <div className="text-center">
                    <Formulario/>
                </div>
            </div>
        </div>
    );
}