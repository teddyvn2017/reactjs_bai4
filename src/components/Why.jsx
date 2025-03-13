import React, { useEffect,useRef } from 'react'
import truck from '../assets/img/truck.png'
import bag from '../assets/img/bag.png'
import support from '../assets/img/support.png'
import return_img from '../assets/img/return.png'
import sofa2 from '../assets/img/sofa2.png'
import dot from '../assets/img/dot.png'
import gsap from "../gsapConfig";

const Why = () => {

    const benefits = [
        { img: truck, title: "Fast & Free Shipping", desc: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was" },
        { img: bag, title: "Easy to Shop", desc: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was" },
        { img: support, title: "24/7 Support", desc: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was" },
        { img: return_img, title: "Hassle Free Returns", desc: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was" },
    ];

    const itemRefsWhy = useRef([]);
    const imgRefWhy = useRef();
    const sectionRefWhy = useRef(null);
    useEffect(() => {

        gsap.fromTo(
            '.why-intro',{opacity:0,y:100},
            {
                opacity:1,
                y:0,
                duration:2,
                stagger:0.2,
                ease: 'power3.out',
                scrollTrigger:{
                    trigger:'.why-intro',
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                }
            }            
        );

        gsap.fromTo(
            itemRefsWhy.current, 
            { opacity:0,y:100 },
            {
                opacity:1,
                y:0,
                duration:2,
                stagger:0.2,
                ease: 'power3.out',
                scrollTrigger:{
                    trigger:'.benefits-why',
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        gsap.fromTo(
            imgRefWhy.current, 
            { x: '100%' },
            {                
                x:'0%',
                duration:2.5,
                stagger:0.2,
                ease: 'power3.out',
                scrollTrigger:{
                    trigger:'.sectionRefWhy',
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    }, []);

    return (
        <section className="mt-16 sectionRefWhy overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 max-w-[1280px]">            
                <div className="flex-col basis-2/4 lg:text-left">
                    <div className='why-intro' >
                        <h1 className="text-[34px] text-title font-semibold mb-4">Why choose us</h1>
                        <p className="text-xl">Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the</p>
                    </div>
                    <div className="grid md:grid-cols-2 mt-8 gap-8 justify-center items-center">
                        {
                            benefits.map((item, index) => (
                            <div 
                                key = {index} 
                                ref = {(el) => (itemRefsWhy.current[index] = el) }
                                className='benefits-why' 
                                >
                                <img src={item.img} alt={item.title} />
                                <h3 className="font-semibold text-title text-[1.25rem] mb-2">{item.title}</h3>
                                <p className="text-[1rem] text-desc">{item.desc}</p>
                            </div>
                        ))}                        
                    </div>
                </div>
            
                <div 
                    ref={imgRefWhy} 
                    className="lg:ml-auto relative md:mt-[5rem] xs: mt-[6rem] img-why">
                    <img src={sofa2}alt="image" className="relative z-10" />
                    <img src={dot} alt="image" className="absolute -top-[5rem] z-0 -left-[5rem]" />
                </div>          
            </div>
        </section>
    )
}

export default Why;