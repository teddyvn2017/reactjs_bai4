import React from 'react'
import hero_sofa from '../assets/img/hero_sofa.png'
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
    return (
        <section className='w-full bg__hero'>
            <div className="container mx-auto px-4 grid items-center justify-center max-w-[1280px] gap-8 lg:py-16 lg:grid-cols-12">
                <div className="place-self-center col-span-12 md:col-span-6 pt-10">
                    <h1 className="text-3xl text-mau_trang font-bold leading-snug mb-[2rem] text-left">
                        Modern Interior <br />
                        Design Studio
                    </h1>
                    <p className="text-mau_trang leading-snug text-xl text-left">
                        Opt for sleek, minimalist designs that prioritize clean lines and simplicity. Incorporate multifunctional pieces to maximize space efficiency. Experiment with bold colors or unique materials to add personality. Lastly, don't forget about comfort – choose furniture that not only looks modern but feels inviting too
                    </p>
                    <div className="mt-10 flex flex-row md:gap-8 gap-6">
                        <button className="btn__shopnow rounded-full bg-mau_vang_nhat text-mau_den text-base px-10 py-3 font-semibold">
                            {/* Phải install thêm thư viện ảnh bootstrap icon */}
                            {/* npm install react-bootstrap-icons --save */}
                        <span>Shop Now</span>
                        <BsArrowRightShort className='btn__shopnow-arrow text-xl' />
                        </button>
                        <button className="btn__explore rounded-full bg-transparent text-mau_den text-base px-10 py-3 
                            font-semibold border-solid border-mau_vang_nhat border-2"><span>Explore</span>
                            <BsArrowRightShort className='explore__arrow text-xl' />
                            </button>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <img src={hero_sofa} alt="image" />
                </div>
            </div>
        </section>
        
    )
}

export default Hero
