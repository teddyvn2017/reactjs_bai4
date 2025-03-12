// gsapConfig.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Kiểm tra xem ScrollTrigger đã được đăng ký chưa
if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

export default gsap;
