import {lorem} from "../../utils/lorem_helper.js";

export const MumAndToddler = () => {
    
    
    return (
        <section className="relative w-full min-h-screen pt-30 md:pt-50 dark:bg-gray-800">
            <div className="relative w-full">
                <img
                    src="/images/mum-toddler.jpg"
                    alt="Mum & Toddler"
                    className="w-full h-[400px] md:h-[800px] object-cover"
                />

                {/* Text box */}
                <div className="
                    relative md:absolute md:top-1/2 md:right-6 md:transform md:-translate-y-1/2
                    max-w-lg p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900
                    w-80 mt-6 md:mt-0
                    mx-auto md:mx-0
                ">
                    <h1 className="text-3xl font-bold mb-4">Mum & Toddler</h1>
                    <p className="pb-2">{lorem.generateParagraphs(2)}</p>
                    <p>{lorem.generateParagraphs(2)}</p>
                </div>
            </div>
        </section>
    );
};