'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const MotionText = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null)
    let xPercent = 0;
    let direction = -1;

    // useEffect( () => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     requestAnimationFrame(animation);

    //     gsap.to(slider.current, {
    //         scrollTrigger: {
    //             trigger: document.documentElement,
    //             start: 0,
    //             end: window.innerHeight,
    //             scrub: 0.25,
    //             onUpdate: e => direction = e.direction * -1,
    //         },
    //         x: "-=300px"
    //     });
        

    // },[] )

    const animation = () => {
        if(xPercent <= -100) {
            xPercent = 0; 
        }
        if(xPercent > 0) {
            xPercent = -100
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        xPercent += 0.1 * direction;
        requestAnimationFrame(animation);

    }

return (
    <div ref={slider} className=' text-black flex items-center whitespace-nowrap mx-20  relative py-10 '>
        <p ref={firstText} className='text-2xl font-bold '>
            Courses starting from $9.99 (up to 85% off) with this Cyber Monday offer. -
        </p>
        <p ref={secondText} className='text-2xl font-bold md:ml-80 mx-[300px] absolute left-full '>
            Courses starting from $9.99 (up to 85% off) with this Cyber Monday offer. -
        </p>
    </div>

    )
}

export default MotionText
