import {lorem} from "../../utils/lorem_helper.js";

export const BabySpaExperience = () => {


    return (
        <section className="
            min-h-screen pt-30 flex flex-col items-center justify-center px-6 py-10
            md:flex-row md:pt-50 md:px-20 md:items-start
            dark:bg-gray-800
        ">
            {/*  Parent Flex Container */}
            <div className="
                flex flex-col items-center
                md:flex-row
            ">
                <div className="
                    relative z-10 max-w-lg p-6 rounded-lg shadow-lg bg-white flex flex-col justify-center self-center
                    dark:bg-gray-900
                    md:-mr-16
                ">
                    <h1 className="text-3xl font-bold mb-4">Baby Spa Experience</h1>
                    <p>{lorem.generateParagraphs(2)}</p>
                </div>
                <div className="flex-shrink-0 relative">
                    <img
                        src="/images/baby-spa-exp.jpg"
                        alt="Mum & Baby Spa"
                        className="
                            w-64 h-64 md:w-96 object-cover rounded-lg shadow-lg
                            md:w-full md:h-[800px]
                        "
                    />
                </div>
            </div>
        </section>
    );
};