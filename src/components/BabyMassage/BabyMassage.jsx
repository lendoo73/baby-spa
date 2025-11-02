import {lorem} from "../../utils/lorem_helper.js";

export const BabyMassage = () => {
    
    
    return (
        <section className="
            min-h-screen pt-30 flex flex-col items-center justify-center px-6 py-10
            md:flex-row md:pt-50 md:px-20 md:items-start
            dark:bg-gray-800
        ">
            {/*  Parent Flex Container */}
            <div className="
                flex flex-col items-center
            ">
                <div className="flex-shrink-0 relative">
                    <img
                        src="/images/baby-massage.jpg"
                        alt="Mum & Baby Spa"
                        className="
                            w-64 md:w-full object-cover rounded-lg shadow-lg
                            md:w-full md:h-[800px]
                        "
                    />
                </div>
                <div className="
                    relative z-10 max-w-3xl p-6 rounded-lg shadow-lg bg-white flex flex-col justify-center self-center
                    dark:bg-gray-900
                    md:-mt-16
                ">
                    <h1 className="text-3xl font-bold mb-4">Baby Massage</h1>
                    <p className="pb-2">{lorem.generateParagraphs(2)}</p>
                    <p>{lorem.generateParagraphs(1)}</p>
                </div>
            </div>
        </section>
    );
};