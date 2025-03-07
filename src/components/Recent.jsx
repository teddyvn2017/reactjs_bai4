import React from 'react'
import recent1 from '../assets/img/recent1.png'
import recent2 from '../assets/img/recent2.png'
import recent3 from '../assets/img/recent3.png'

const Recent = () => {
  return (
    <section className="mt-12">
        <div className="container mx-auto px-4 max-w-[1280px]">
            <div className="flex flex-row items-center gap-4">
                <h1 className="lg:text-[34px] text-[28px] text-title font-semibold">
                    Recent Blog
                </h1>
                <h3 className="text-title text-xl underline underline-offset-8 decoration-2 decoration-mau_den ml-auto">
                    View All Posts
                </h3>
            </div>
            <div className="mt-8">
                <div className="grid grid-cols-12 gap-8">
                    <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-4 px-4">
                        <img src={recent1} alt="image" className="rounded-md" />
                        <div className="mt-4 text-base">
                            <h3 className="text-mau_den font-semibold text-xl">First Time Home Owner Ideas</h3>
                            <p className="text-mau_den"><span className="italic">by</span> <span className="font-bold">Nana Ama</span> <span className="italic">on</span> 
                                <span className="font-bold">Nov 18th, 2022</span> </p>
                        </div>
                    </div>

                    <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-4 px-4">
                        <img src={recent2} alt="image" className="rounded-md" />
                        <div className="mt-4 text-base">
                            <h3 className="text-mau_den font-semibold text-xl">First Time Home Owner Ideas</h3>
                            <p className="text-mau_den"><span className="italic">by</span> <span className="font-bold">Nana Ama</span> <span className="italic">on</span> 
                                <span className="font-bold">Nov 18th, 2022</span> </p>
                        </div>
                    </div>


                    <div className="flex flex-col col-span-12 md:col-span-6 lg:col-span-4 px-4">
                        <img src={recent3} alt="image" className="rounded-md" />
                        <div className="mt-4 text-base">
                            <h3 className="text-mau_den font-semibold text-xl">First Time Home Owner Ideas</h3>
                            <p className="text-mau_den"><span className="italic">by</span> <span className="font-bold">Nana Ama</span> <span className="italic">on</span> 
                                <span className="font-bold">Nov 18th, 2022</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recent