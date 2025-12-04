'use client';
import { useEffect, useRef } from 'react';
import { animate, scroll } from 'motion';

export default function HorizontalScrollSection(): JSX.Element {
    const ulRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const items = document.querySelectorAll('#horizontal-scroll-section li');

        if (ulRef.current && items.length > 0) {
            const controls = animate(
                ulRef.current,
                {
                    transform: ['none', `translateX(-${items.length - 1}00vw)`],
                } as any
            );
            
            const section = document.querySelector('#horizontal-scroll-section');
            if (section) {
                scroll(controls, { target: section });
            }

            const segmentLength = 1 / items.length;
            items.forEach((item, i) => {
                const header = item.querySelector('h2');

                if (header && section) {
                    scroll(animate([header] as any, { x: [800, -800] } as any), {
                        target: section,
                        offset: [
                            [i * segmentLength, 1],
                            [(i + 1) * segmentLength, 0],
                        ],
                    });
                }
            });
        }
    }, []);

    return (
        <section id="horizontal-scroll-section" className='h-[500vh] relative'>
            <ul ref={ulRef} className='flex sticky top-16 md:top-0 w-full h-screen'>
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
