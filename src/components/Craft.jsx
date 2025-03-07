import React from 'react'
import IconPlus from './icon/Plus.jsx';
import ghe1 from '../assets/img/ghe1.png';
import { BsArrowRightShort } from "react-icons/bs";

const Craft = () => {
    return (
        <section className="mt-12 py-16">
        <div className="grid container mx-auto px-4 lg:grid-cols-12 md:grid-cols-6 gap-10 overflow-hidden justify-center items-center max-w-[1280px]">
            <div className="col-span-3 md:col-span-3">
                <h1 className="text-3xl text-title font-semibold text-wrap text-left">Crafted with excellent material.</h1>
                <p className="mt-4 text-mau_desc text-xl text-left">
                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.</p>
                <div className='md:text-left'>
                    <button className="btn__explore rounded-full bg-mau_nen_primary text-mau_trang text-base px-8 py-3 mt-12">
                        <span>Explore</span><BsArrowRightShort className='explore__arrow text-xl' />
                    </button>
                </div>
            </div>
            
            <div className="col-span-3 md:col-span-3 py-16">
                <div className="flex flex-col justify-center items-center relative crafted__chair">
                    <img src={ghe1} alt="image" 
                    className="z-10 duration-500 transition-all hover:scale-95 cursor-pointer hover:-translate-y-2" />
                    <div className="justify-self-end text-center pt-2 font-bold z-10 mt-8 pb-8">
                        <h4>Modern Chair</h4>
                        <h5>$78.00</h5>
                    </div>
                    <div className="absolute z-10 -bottom-4 opacity-0 transition duration-1000 chair__plus drop-shadow-lg">
                        <IconPlus />  
                    </div>
                </div>
            </div>

            <div className="col-span-3 md:col-span-3 py-16">
                <div className="flex flex-col justify-center items-center relative crafted__chair">
                    <img src={ghe1} alt="image" className="z-10 duration-500 transition-all hover:scale-95 cursor-pointer hover:-translate-y-2" />
                    <div className="justify-self-end text-center pt-2 font-bold z-10 mt-8 pb-8">
                        <h4>Modern Chair</h4>
                        <h5>$78.00</h5>
                    </div>
                    <div className="absolute z-10 -bottom-4 opacity-0 transition duration-1000 chair__plus drop-shadow-lg">
                        <IconPlus />
                    </div>
                </div>
            </div>

            <div className="col-span-3 md:col-span-3 py-16">
                <div className="flex flex-col justify-center items-center relative crafted__chair">
                    <img src={ghe1} alt="image" className="z-10 duration-500 transition-all hover:scale-95 cursor-pointer hover:-translate-y-2" />
                    <div className="justify-self-end text-center pt-2 font-bold z-10 mt-8 pb-8">
                        <h4>Modern Chair</h4>
                        <h5>$78.00</h5>
                    </div>
                    <div className="absolute z-10 -bottom-4 opacity-0 transition duration-1000 chair__plus drop-shadow-lg">
                        <IconPlus />
                    </div>
                </div>
            </div>
        </div> 
    </section>
    )
}

export default Craft

