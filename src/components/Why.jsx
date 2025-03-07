import React from 'react'
import truck from '../assets/img/truck.png'
import bag from '../assets/img/bag.png'
import support from '../assets/img/support.png'
import return_img from '../assets/img/return.png'
import sofa2 from '../assets/img/sofa2.png'
import dot from '../assets/img/dot.png'


const Why = () => {
    return (
        <section className="mt-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 max-w-[1280px]">            
                <div className="flex-col basis-2/4 lg:text-left">
                    <div>
                        <h1 className="text-[34px] text-title font-semibold mb-4">Why choose us</h1>
                        <p className="text-xl">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the</p>
                    </div>
                    <div className="grid md:grid-cols-2 mt-8 gap-8 justify-center items-center">
                        <div>
                            <img src={truck} alt="image" />
                            <h3 className="font-semibold text-title text-[1.25rem] mb-2">Fast  & Free Shipping </h3>
                            <p className="text-[1rem] text-desc">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                        </div>
                        <div>
                            <img src={bag} alt="image" />
                            <h3 className="font-semibold text-title text-[1.25rem mb-2">Easy to Shop</h3>
                            <p className="text-[1rem] text-desc">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                        </div>
                        <div>
                            <img src={support} alt="image" />
                            <h3 className="font-semibold text-title text-[1.25rem] mb-2">24/7 Support</h3>
                            <p className="text-[1rem] text-desc">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                        </div>
                        <div>
                            <img src={return_img} alt="image" />
                            <h3 className="font-semibold text-title text-[1.25rem] mb-2">Hassle Free Returns</h3>
                            <p className="text-[1rem] text-desc">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was</p>
                        </div>
                    </div>
                </div>
            
                <div className="lg:ml-auto relative md:mt-[5rem] xs: mt-[6rem]">
                    <img src={sofa2}alt="image" className="relative z-10" />
                    <img src={dot} alt="image" className="absolute -top-[5rem] z-0 -left-[5rem]" />
                </div>          
            </div>
        </section>
    )
}

export default Why;

