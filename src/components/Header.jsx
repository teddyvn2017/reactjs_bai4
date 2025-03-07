import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useState,useEffect } from "react";
import { useRef } from 'react';
import { BsPersonCircle ,BsBag   } from "react-icons/bs";
import {gsap} from "gsap";
import CustomLink from './CustomLink';
import CartIcon from './CartIcon';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const container = useRef();
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const menuRef = useRef(null);
    const menuItemRefs = useRef([]);

    useEffect(() => {
        menuItemRefs.current = menuItemRefs.current.slice(0, 5); // 5 phần tử menu
    }, []);
      
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        const timeline = gsap.timeline(); 
        if (!isOpen) {
            gsap.to(menuRef.current, {opacity: 1, duration: 0.5, ease: 'power2.easeInOut' }, '-=0.1');
            gsap.to(line1Ref.current, { rotate: 45, y: 8,  duration: 0.5 });
            gsap.to(line2Ref.current, { opacity: 0, duration: 0.5 });
            gsap.to(line3Ref.current, { rotate: -45, y: -8,  duration: 0.5 });
          
            menuItemRefs.current.forEach((menuItem, index) => {
                timeline.to(menuItem, { opacity: 1, y: -20, duration:0.7, ease: 'power2.easeInOut' }, `-=${0.4 - (index * 0.1)}`);
              });

     
            console.log(isOpen);
        }
        else {
           
            // di chuyển phần tử cuối cùng trước khi đóng menu
            for (let i = menuItemRefs.current.length - 1; i >= 0; i--) {
                
                if (i === menuItemRefs.current.length - 1) {
                    timeline.to(menuItemRefs.current[i], { duration: 0.4, opacity: 0, y: 0, ease: 'power2.easeInOut' },`-=${0.4 - (i * 0.1)}`);
                    timeline.eventCallback('onComplete', () => {
                        gsap.to(menuRef.current, { opacity: 0, duration: 0.5, ease: 'power2.easeInOut', onComplete: () => {
                            setIsOpen(false);
                            // gsap.set(menuRef.current, { display: 'none' }); // Ẩn menu sau khi đóng
                        } });
                    });

                    gsap.to(line1Ref.current, { rotate: 0, y: 0, duration: 0.5 });
                    gsap.to(line2Ref.current, { opacity: 1, duration: 0.5 });
                    gsap.to(line3Ref.current, { rotate: 0, y: 0, duration: 0.5 });
                }

                else {
                    timeline.to(menuItemRefs.current[i], { duration: 0.4, opacity: 0, y: 0, ease: 'power2.easeInOut' },`-=${0.25 - (i * 0.1)}`);
                }
            }
            console.log(isOpen);
        }
    }
   

    const handleMouseEnter = (index) => {
        gsap.to(menuItemRefs.current[index], { width: '100%', duration: 0.3 });
      };
      
      const handleMouseLeave = (index) => {
        gsap.to(menuItemRefs.current[index], { width: '0%', duration: 0.3 });
      };

    return (
        <section className="bg__header w-full h-auto pb-8">
            {/* <Router> */}
                <nav className="fixed left-0 top-0 bg__header w-full z-20 shadow-md">
                    <div className="container flex items-center justify-between md:flex-row h-16 max-w-[1280px] mx-auto px-4">
                        <h1 className="text-mau_trang font-bold font-inter text-xl">
                            <a href="/">
                                FurniExpert
                            </a>
                        </h1>
                        <ul className="hidden gap-10 text-mau_trang md:flex md:flex-row text-base font-semibold">                                                 
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/about-us">About us</CustomLink>
                            <CustomLink to="/services">Services</CustomLink>
                            <CustomLink to="/blog">Blog</CustomLink>
                            <CustomLink to="/contact-us">Contact us</CustomLink>
                        </ul>
                        
                    {/* <Button Humberger /> */}
                    <div ref={container}>
                        <button onClick={toggleMenu} className="humburger-button w-8 h-8 flex flex-col gap-1 md:hidden mt-4">
                            <div ref={line1Ref} className="line bg-white h-[4px] w-full rounded-full"></div>
                            <div ref={line2Ref} className="line bg-white h-[4px] w-full rounded-full"></div>
                            <div ref={line3Ref} className="line bg-white h-[4px] w-full rounded-full"></div>
                        </button>  
                    </div>
                    {/* <NavMobile /> */}
                        <div ref={menuRef} className="menu__mobile md:hidden">
                            <nav className='navigation pt-8'>
                                <ul>

                                    <li ref={(el) => (menuItemRefs.current[0] = el)} 

                                    style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                    <a href="/" className="text-3xl font-bold nav__link">Home</a>
                                    </li>
                                    <li ref={(el) => (menuItemRefs.current[1] = el)} 

                                        style={{ opacity: 0, transform: 'translateY(20px)' }}                               
                                    >
                                        <a href="/about-us" className="text-3xl font-bold nav__link">About us</a>
                                    </li>
                                    <li ref={(el) => (menuItemRefs.current[2] = el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                        <a href="/services" className="text-3xl font-bold nav__link">Services</a>
                                    </li>
                                    <li ref={(el) => (menuItemRefs.current[3] = el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                        <a href="/blog" className="text-3xl font-bold nav__link">Blog</a>
                                    </li>
                                    <li ref={(el) => (menuItemRefs.current[4] = el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                        <a href="/contact-us" className="text-3xl font-bold nav__link">Contact us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="flex flex-row justify-center items-center gap-[28px] text-2xl text-mau_trang">
                            <a href="/dang-nhap">
                                <BsPersonCircle />
                            </a>
                            <CartIcon cartCount={1} />  
                        </div>
                    </div>
                    
                </nav>                    
        </section>
  )
}

export default Header