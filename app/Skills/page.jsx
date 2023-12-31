import Image from 'next/image';
import React from 'react';
import Html from '../../public/assets/skills/html.png';
import Css from '../../public/assets/skills/css.png';
import Javascript from '../../public/assets/skills/javascript.png';
import ReactImg from '../../public/assets/skills/react.png';
import Tailwind from '../../public/assets/skills/tailwind.png';
import Github from '../../public/assets/skills/github1.png';
import Netlify from '../../public/assets/skills/netlify.png';
import NextJS from '../../public/assets/skills/nextjs.png'
import NodeJS from '../../public/assets/skills/nodejs.png'
import MongoDB from '../../public/assets/skills/mongo.png'
import ExpressJS from '../../public/assets/skills/expressjs.png'
import Wordpress from '../../public/assets/skills/wordpress.png'
import Pagenav from '../Pagenav/page';

const Skills = () => {
    return (
        <div>
            <Pagenav />
            <div id='skills' className='w-full  p-4 '>
                <div className='max-w-[1240px]  mx-auto flex flex-col justify-center h-full pt-24 md:px-12 lg:px-14 xl:px-2'>
                    <p className='text-xl tracking-widest uppercase text-[#1488A1]'>
                        Skills
                    </p>
                    <h2 className='py-4'>What I Can Do</h2>
                    <div className=' grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={Html} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>HTML</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={Css} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>CSS</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={Tailwind} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Tailwind</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={Javascript} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>JavaScript</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={ReactImg} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>ReactJS</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={NextJS} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>NextJS</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={Github} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Github</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={Netlify} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Netlify</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={NodeJS} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>NodeJS</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={ExpressJS} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>ExpressJS</h3>
                                </div>
                            </div>
                        </div>

                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={MongoDB} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>MongoDB</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src={Wordpress} width='64px' height='64px' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>WordPress</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;