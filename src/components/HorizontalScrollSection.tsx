'use client';
import { useEffect, useRef } from 'react';

export default function HorizontalScrollSection(): JSX.Element {
    const sectionRef = useRef<HTMLElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const list = ulRef.current;
        if (!section || !list) {
            return undefined;
        }

        const items = Array.from(section.querySelectorAll('li'));
        const totalSlides = items.length;
        if (totalSlides === 0) {
            return undefined;
        }

        items.forEach((item, index) => {
            item.setAttribute('data-index', index.toString());
        });

        const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

        const handleScroll = () => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;
            const maxScroll = sectionHeight - viewportHeight;

            if (maxScroll <= 0) {
                return;
            }

            const scrollY = window.scrollY;
            const progress = clamp((scrollY - sectionTop) / maxScroll);
            const maxTranslate = (totalSlides - 1) * 100;

            list.style.transform = `translateX(-${progress * maxTranslate}vw)`;
            items.forEach((item, index) => {
                const header = item.querySelector('h2');
                if (!header) {
                    return;
                }

                const segmentStart = index / totalSlides;
                const segmentEnd = (index + 1) / totalSlides;
                const segmentProgress = clamp((progress - segmentStart) / (segmentEnd - segmentStart));
                const headerTranslate = 800 - segmentProgress * 1600;
                header.style.transform = `translateX(${headerTranslate}px)`;
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            id="horizontal-scroll-section"
            ref={sectionRef}
            className='h-[500vh] relative'
        >
            <ul ref={ulRef} className='flex sticky top-0 w-full h-screen will-change-transform'>
                <li className='h-screen w-screen bg-red-400 flex flex-col justify-center overflow-hidden items-center shrink-0'>
                    <img
                        src='https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop'
                        className='2xl:w-[550px] w-[380px] absolute bottom-32 md:bottom-8'
                        width={800}
                        height={800}
                        alt='Passion'
                    />
                    <h2 className='text-[20vw] font-semibold relative z-10 inline-block text-white'>
                        PASSION
                    </h2>
                </li>
                <li className='h-screen w-screen bg-blue-500 flex flex-col justify-center overflow-hidden items-center shrink-0'>
                    <img
                        src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop'
                        className='2xl:w-[550px] w-[380px] absolute bottom-32 md:bottom-8'
                        width={800}
                        height={800}
                        alt='Work'
                    />
                    <h2 className='text-[20vw] font-semibold relative z-10 inline-block text-white'>
                        WORK
                    </h2>
                </li>
                <li className='h-screen w-screen bg-orange-500 flex flex-col justify-center overflow-hidden items-center shrink-0'>
                    <img
                        src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop'
                        className='2xl:w-[550px] w-[380px] absolute bottom-32 md:bottom-8'
                        width={800}
                        height={800}
                        alt='Motivation'
                    />
                    <h2 className='text-[20vw] font-semibold relative z-10 inline-block text-white'>
                        MOTIVATION
                    </h2>
                </li>
                <li className='h-screen w-screen bg-yellow-500 flex flex-col justify-center overflow-hidden items-center shrink-0'>
                    <img
                        src='https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop'
                        className='2xl:w-[550px] w-[380px] absolute bottom-32 md:bottom-8'
                        width={800}
                        height={800}
                        alt='Inspiration'
                    />
                    <h2 className='text-[20vw] font-semibold relative z-10 inline-block text-white'>
                        INSPIRATION
                    </h2>
                </li>
                <li className='h-screen w-screen bg-green-500 flex flex-col justify-center overflow-hidden items-center shrink-0'>
                    <img
                        src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=800&fit=crop'
                        className='2xl:w-[550px] w-[380px] absolute bottom-32 md:bottom-8'
                        width={800}
                        height={800}
                        alt='Believe'
                    />
                    <h2 className='text-[20vw] font-semibold relative z-10 inline-block text-white'>
                        BELIEVE
                    </h2>
                </li>
            </ul>
        </section>
    );
}
