import React from 'react';
import frntimg from "../asetes/frntimg.png"; // Correct the path if necessary

function Heros() {
    return (
        <div className="hero pt-[90px] flex w-full transition-transform duration-300 hover:scale-105 bg-white">
            <div className='relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[400px] m-4 overflow-hidden rounded-xl'>
                <img className='w-full h-full object-cover' src={frntimg} alt="Hero" />
                <div className="hero-content absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 rounded-xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 pt-14 text-center">It's All About Good Food & Taste</h2>
                    <p className="max-w-md text-center px-4 md:text-lg lg:text-xl">
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et ea.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Heros;
