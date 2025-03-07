import React from 'react'
import ghe8 from '../assets/img/ghe8.png'
import envelope from '../assets/img/envelope.png'
import plane from '../assets/img/plane.png'

const Footer = () => {
  return (
    <footer className="lg:mt-[160px] mt-[120px] w-full bg__footer py-16">

        <div className="container max-w-[1280px] mx-auto px-4">
            <div className="flex flex-col md:flex-row w-full gap-8 justify-center">
                <div className="flex flex-col gap-4 md:basis-1/2">
                    <div className="flex flex-row gap-2">
                        <img src={envelope} alt="image" />
                        <h3 className="text-mau_den font-semibold text-xl">Subscribe to Newsletter</h3>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row items-center">
                        <input className="appearance-none rounded-[0.5rem] border border-mau_vien_xam bg-transparent
                          w-full py-2 px-4 text-mau_den focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="Enter your name" />

                        <input className="appearance-none rounded-[0.5rem] border border-mau_vien_xam bg-transparent
                        w-full py-2 px-4 text-mau_den focus:outline-none focus:shadow-outline" 
                        id="email" type="text" placeholder="Enter your email" />
                        <img src={plane} alt="image" className="bg-transparent mr-auto scale-75 px-[12px] py-[10px] lg:px-[10px] rounded-[8px] border border-mau_vien_xam w-fit lg:scale-90" />
                        
                    </div>
                </div>

                <div className="md:basis-1/2 relative pb-[5rem]">
                    <img src={ghe8} alt="image" className="absolute lg:-top-[8rem] lg:right-0 md:-top-[8rem] md:right-0" />
                </div>
            </div>    

            <div className="xs:mt-[360px] mt-[16rem] md:mt-[6rem] lg:mt-[11rem]">
                <h2 className="text-mau_den text-2xl font-semibold">FurniExpert</h2>
                <div className="mt-4 grid grid-cols-12 gap-8 mau__chu_footer">
                    <p className="text-base col-span-12 text-wrap lg:col-span-3 pr-2">
                        Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done
                    </p>                  
                    
                    <div className="lg:col-span-9 col-span-12">
                        
                        <div className="grid gap-8 md:grid-cols-12 xs:grid-cols-12">
                            <div className="xs:col-span-6 md:col-span-6 lg:col-span-3 col-span-12">
                                <ul className="flex flex-col gap-4 text-mau_desc">
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">About us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Services</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Contact us</a>
                                    </li>
                                </ul>
                            </div>
    
                            <div className="xs:col-span-6 md:col-span-6 lg:col-span-3 col-span-12">
                                <ul className="flex flex-col gap-4 text-mau_desc">
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Support</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Knowledge base</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Live chat</a>
                                    </li>                               
                                </ul>
                            </div>
    
                            <div className="xs:col-span-6 md:col-span-6 lg:col-span-3 col-span-12">
                                <ul className="flex flex-col gap-4 text-mau_desc">
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Job</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Our team</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Leadership</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
    
                            <div className="xs:col-span-6 md:col-span-6 lg:col-span-3 col-span-12">
                                <ul className="flex flex-col gap-4 text-mau_desc">
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Nordic Chair</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Kruzo Aero</a>
                                    </li>
                                    <li>
                                        <a href="#" className="link__social font-semibold text-base">Ergonomic</a>
                                    </li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container flex flex-row gap-8 mt-[2rem] text-3xl max-w-[1280px]">
            <a href="#" className="group">
                <i className="ri-facebook-fill transition ease-in-out p-2 group-hover:bg-mau_xanh rounded-full group-hover:text-mau_trang duration-500"></i>
            </a>
            <a href="#" className="group">
                <i className="ri-instagram-line transition ease-in-out p-2
                group-hover:bg-mau_xanh rounded-full group-hover:text-mau_trang duration-500"></i>
            </a>
            <a href="#" className="group">
                <i className="ri-twitter-line transition ease-in-out p-2
                group-hover:bg-mau_xanh rounded-full group-hover:text-mau_trang duration-500"></i>
            </a>
            <a href="#" className="group">
                <i className="ri-linkedin-box-line transition ease-in-out p-2
                group-hover:bg-mau_xanh rounded-full group-hover:text-mau_trang duration-500"></i>
            </a>
        </div>

        <div className="container mt-[1rem] max-w-[1280px]  mx-auto px-4">
            <hr className="border-mau_den border-y-1" />
        </div>

        <div className="container mt-[2rem] grid grid-cols-12 gap-8 max-w-[1280px] mx-auto px-4">
            <div className="text-mau_desc text-base col-span-12 lg:col-span-6  justify-start">
                Copyright 2022 sybexdesigns@gmail.com. All Rights Reserved.
            </div>
            <div className="flex flex-row gap-8 justify-start  col-span-12 lg:col-span-6 lg:justify-end text-mau_desc">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer