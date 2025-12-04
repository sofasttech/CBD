'use client';
import { useEffect, useRef } from 'react';
import { animate, scroll, spring } from 'motion';

export default function HorizontalScrollSection(): JSX.Element {
    const ulRef = useRef<HTMLUListElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ulRef.current || !sectionRef.current) return;

        const items = ulRef.current.querySelectorAll('li');
        
        const controls = animate(
            ulRef.current,
            {
                transform: ['none', `translateX(-${items.length - 1}00vw)`],
            } as any,
            { easing: spring() }
        );
        
        scroll(controls, { target: sectionRef.current });

        const segmentLength = 1 / items.length;
        items.forEach((item, i) => {
            const header = item.querySelector('h2');

            if (header && sectionRef.current) {
                scroll(animate([header] as any, { x: [800, -800] } as any), {
                    target: sectionRef.current,
                    offset: [
                        [i * segmentLength, 1],
                        [(i + 1) * segmentLength, 0],
                    ],
                });
            }
        });
    }, []);

    return (
        <section ref={sectionRef} id="horizontal-scroll-section" className='h-[500vh] relative'>
            <ul ref={ulRef} className='flex sticky top-16 md:top-0 left-0 h-screen'>
                <li className='min-w-full h-full bg-red-400 flex flex-col justify-center items-center px-8 py-12 gap-12'>
                    <h2 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white z-10 text-center uppercase tracking-wider mt-16 md:mt-0'>
                        PASSION
                    </h2>
                    <img
                        src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop'
                        className='w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-2xl shadow-2xl object-cover'
                        width={800}
                        height={800}
                        alt='Passion'
                    />
                </li>
                <li className='min-w-full h-full bg-blue-500 flex flex-col justify-center items-center px-8 py-12 gap-12'>
                    <h2 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white z-10 text-center uppercase tracking-wider mt-16 md:mt-0'>
                        WORK
                    </h2>
                    <img
                        src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop'
                        className='w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-2xl shadow-2xl object-cover'
                        width={800}
                        height={800}
                        alt='Work'
                    />
                </li>
                <li className='min-w-full h-full bg-orange-500 flex flex-col justify-center items-center px-8 py-12 gap-12'>
                    <h2 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white z-10 text-center uppercase tracking-wider mt-16 md:mt-0'>
                        MOTIVATION
                    </h2>
                    <img
                        src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop'
                        className='w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-2xl shadow-2xl object-cover'
                        width={800}
                        height={800}
                        alt='Motivation'
                    />
                </li>
                <li className='min-w-full h-full bg-yellow-500 flex flex-col justify-center items-center px-8 py-12 gap-12'>
                    <h2 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white z-10 text-center uppercase tracking-wider mt-16 md:mt-0'>
                        INSPIRATION
                    </h2>
                    <img
                        src='https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop'
                        className='w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-2xl shadow-2xl object-cover'
                        width={800}
                        height={800}
                        alt='Inspiration'
                    />
                </li>
                <li className='min-w-full h-full bg-green-500 flex flex-col justify-center items-center px-8 py-12 gap-12'>
                    <h2 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white z-10 text-center uppercase tracking-wider mt-16 md:mt-0'>
                        BELIEVE
                    </h2>
                    <img
                        src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=800&fit=crop'
                        className='w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto rounded-2xl shadow-2xl object-cover'
                        width={800}
                        height={800}
                        alt='Believe'
                    />
                </li>
            </ul>
        </section>
    );
}
