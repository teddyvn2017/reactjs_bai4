import React from 'react'
import ghe from '../assets/img/ghe1.png'
const Three = () => {
    return (
        <section className="mt-12 w-full bg-mau_vang_nhat">
            <div className="container mx-auto max-w-[1280px] grid grid-cols-12 py-16 gap-8">

                <div className="flex flex-row gap-8 items-center justify-center col-span-12 md:col-span-6 lg:col-span-4 px-4">
                    <div className="relative bg_chair1 basis-1/2">
                        <img src={ghe} alt="image" className="relative scale-75 z-10 mx-auto" />
                    </div>
                    <div className="flex flex-col gap-4 basis-1/2">
                        <h4 className="text-mau_den font-semibold text-base">Nordic Chair</h4>
                        <p className="text-sm text-desc">Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
                        <a href="#" className="text-mau_den font-semibold">Read more</a>
                    </div>
                </div>
                
                <div className="flex flex-row gap-8 items-center justify-center col-span-12 md:col-span-6 lg:col-span-4 px-4">
                    <div className="relative bg_chair2 basis-1/2">
                        <img src={ghe} alt="image" className="relative scale-75 z-10 mx-auto" />
                    </div>
                    <div className="flex flex-col gap-4 basis-1/2">
                        <h4 className="text-mau_den font-semibold text-base">Kruzi Aero</h4>
                        <p className="text-sm text-desc">Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
                        <a href="#" className="text-mau_den font-semibold">Read more</a>
                    </div>
                </div>
                
                <div className="flex flex-row gap-8 items-center justify-center col-span-12 md:col-span-6 lg:col-span-4 px-4">
                    <div className="relative bg_chair1 basis-1/2">
                        <img src={ghe} alt="image" className="relative scale-75 z-10 mx-auto" />
                    </div>
                    <div className="flex flex-col gap-4  basis-1/2">
                        <h4 className="text-mau_den font-semibold text-base">Ergonomic Chair</h4>
                        <p className="text-sm text-desc">Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
                        <a href="#" className="text-mau_den font-semibold">Read more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Three
