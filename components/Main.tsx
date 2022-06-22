import React, { useState, useEffect, useRef } from 'react';

import { } from 'react-icons';
import { AiTwotonePhone } from 'react-icons/ai';
import { BiCard } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

import styles from './main.module.css';


const Main = () => {
    const nameRef = useRef(null);
    const [name, setName] = useState('');
    let timer = useRef(null);
    let fullName =  useRef("I'm Isah Hamza..");
    const fullNameArray = useRef(fullName.current.split(''));

    let backwardTimer = useRef(null);
    let magicFunction: Function  = () => {
        fullNameArray.current = fullName.current.split('');
        timer.current = setInterval(()=>{
            const char = fullNameArray.current.shift(); 
            setName(name => name + char);
        },600)
    };
    let counte = 0;

    useEffect(() => {
        if(name == "I'm Isah Hamza.."){
            magicFunction();
            setName('');
            clearInterval(timer.current);
        }
          
      return () => {
        clearInterval(backwardTimer.current)
        clearInterval(timer.current)
      }
    }, [name])
    

    useEffect(() => {

        magicFunction();

        if(fullNameArray.current == []) fullNameArray.current = fullName.current.split('');
        timer.current = setInterval(()=>{
            const char = fullNameArray.current.shift(); 
            setName(name => name + char);
        },500)

      return () => {
        clearInterval(timer.current)
        clearInterval(backwardTimer.current)
      }
    },[])
    
    
  return (
    <main className='flex  flex-col space-y-24 md:spacey-32 pb-12 px-2 md:px-4 mt-32  '>
        {/* hero section */}
        <section className='w-full flex justify-center text-center md:text-left items-center flex-1 gap-8 md:flex-row flex-col md:items-center'>
            <div data-aos = 'fade-up-right' className='rounded-full  transition-all duration-1000  border-8 border-gray-500 shadow-2xl min-w-max '>
                <img src={'/assets/images/hamza.jpg'} alt = '' className={`${styles.heroImg }  rounded-full w-[300px] h-[300px] object-cover object-left-top rotate-[364deg] `} />
            </div>
            <div data-aos = 'fade-up-left' className='flex flex-col max-w-[600px]'>
                    <p className='text-gray-500 font-bold text-3xl md:text-4xl'>Hi!</p>
                    <p className=' font-bold text-4xl md:text-5xl my-4 text-gray-700 font-mono'><span className='font-extralight'>{`${name}|`}</span></p>
                    <p className='text-slate-900 font-semibold mb-4  text-lg'>An Experienced Web Developer</p>
                    <p className='text-justify'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, atque reiciendis nobis blanditiis quas accusamus est! At vitae nemo, 
                        odio quasi inventore atque minima commodi ex maxime aspernatur voluptatem ipsam. </p>
                    <div className = {`${styles.btn_container} mt-6 space-x-4 flex justify-center md:justify-start  md:flex-row `}>
                        <button className='flex items-center bg-blue-600 rounded-md text-white px-6 py-2 transition-all duration-500 ease-in hover:bg-blue-900'> <span className='mr-2'><BiCard /></span> Download CV</button>
                        <button className='flex items-center rounded-md border border-blue-600 px-6 py-2 transition-all duration-500 ease-in hover:bg-blue-100 '> <span className='mr-2'><AiTwotonePhone /> </span>Contact</button>
                    </div>
            </div>
        </section>

        {/* skills section */}
        <section className='lg:px-32 md:px-16'>
            <div>
                <p className={` ${styles.skills} before:bg-blue-500 relative text-center text-3xl font-bold font-mono mb-16 ` }>Skills/Experience</p>
                <div className='flex gap-6 flex-wrap grow ' >
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/html.jpg" alt="html" /></div>
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/css.jpg" alt="css" /></div>
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/react.png" alt="react" /></div>
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/next.jpg" alt="next" /></div>
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/js.png" alt="js" /></div>
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/ts.png" alt="ts" /></div>
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/sass.png" alt="sass" /></div>
                    <div data-aos = "fade-up" className='grow md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/tailwind.png" alt="tailwind" /></div>
                    <div data-aos = "fade-up" className='grow xxl:grow-0 md:w-1/4 xxl:w-1/5 md:h-40'><img className='w-full object-fill object-center h-[50px] md:h-full' src = "/assets/images/git.png" alt="git" /></div>
                </div>
            </div>
        </section>

        {/* completed works */}
        <section className=' w-full lg:px-32 md:px-16 '>
            <div className='flex flex-col w-full' >
                <p className={` ${styles.projects} before:bg-blue-500 relative text-center text-3xl font-bold font-mono mb-16 ` }>Completed Projects</p>
                <div className='flex justify-center'>
                    <p className='max-w-2xl text-justify md:text-center ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat esse obcaecati sequi aliquid. Quam nostrum exercitationem animi atque ipsum, corporis lauconsectetur error consequuntur eligendi vitae nobis, rem ratione dolorem corrupti explicabo illo provident!</p>
                </div>
                <div className='flex flex-col md:grid md:grid-cols-3 mt-8 gap-x-5 gap-y-10 '>
                    <a href="https://paritie.github.io/reliancecart/pages/shoppers.html">
                    <div className='flex flex-col' data-aos = 'zoom-in'>
                        <div>
                            <img className='max-w-full aspect-video' src="/assets/images/project-images/reliance.png" alt="reliance" />
                        </div>
                        <div className=' bg-black bg-opacity-50 rounded-b-md p-5 py-6 text-white opacity-95  '>
                            <p> <span className='font-bold' >Title</span>: RelianceCart</p>
                            <p> <span className='font-bold' >Link:</span> <a href="https://paritie.github.io/reliancecart/pages/shoppers.html"> 
                                reliancecart
                                </a> 
                            </p>
                            <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT,NEXT.JS</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://kadpay.netlify.app/services">
                        <div className='flex flex-col' data-aos = 'zoom-in'>
                            <div>
                                <img className='max-w-full aspect-video' src="/assets/images/kadpay.png" alt="kadpay" />
                            </div>
                            <div className=' bg-black bg-opacity-50 rounded-b-md p-5 py-6 text-white opacity-95  '>
                                <p> <span className='font-bold' >Title</span>: KadPay</p>
                                <p> <span className='font-bold' >Link:</span> 
                                    <a href="https://kadpay.netlify.app/services"> 
                                    <a >kadpay</a> 
                                    </a> 
                                </p>
                                <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT,NEXT.JS</p>
                            </div>
                        </div>
                    </a>
                    <a href="http://hub-manager.vercel.app/hub-manager">
                        <div className='flex flex-col' data-aos = 'zoom-in'>
                            <div>
                                <img className='max-w-full aspect-video' src="/assets/images/project-images/hub-manager.png" alt="crowdfund"   />
                            </div>
                            <div className=' bg-black bg-opacity-50 rounded-b-md p-5 py-6 text-white opacity-95  '>
                                <p> <span className='font-bold' >Title</span>: Hub Manager</p>
                                <p> <span className='font-bold' >Link:</span> 
                                    <a href="http://hub-manager.vercel.app/hub-manager">
                                        hub-manager
                                        </a>
                                </p>
                                <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, REACT,NEXT.JS</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://hubspotclone.netlify.app/">
                    <div className='flex flex-col' data-aos = 'zoom-in'>
                        <div>
                            <img className='max-w-full aspect-video' src="/assets/images/project-images/hub1.png" alt="hubspot" />
                        </div>
                        <div className='bg-black bg-opacity-50 rounded-b-md  py-6 text-white opacity-95 p-5 '>
                            <p> <span className='font-bold' >Title</span>: HubSpot</p>
                            <p> <span className='font-bold' >Link:</span> <a href="https://hubspotclone.netlify.app/">hubspot</a> </p>
                            <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, TYPESCRIPT</p>
                        </div>
                    </div>
                    </a>
                    <a href="www.youtube-hompage-clone.netlify.app">
                        <div className='flex flex-col' data-aos = 'zoom-in'>
                            <div>
                                <img className='max-w-full aspect-video' src="/assets/images/project-images/youtubeclone.png" alt="kadpay" />
                            </div>
                            <div className=' bg-black bg-opacity-50 rounded-b-md p-5 py-6 text-white opacity-95  '>
                                <p> <span className='font-bold' >Title</span>: Youtube clone</p>
                                <p> <span className='font-bold' >Link:</span> <a href="www.youtube-hompage-clone.netlify.app">
                                    youtube
                                    </a>
                                </p>
                                <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT,NEXT.JS</p>
                            </div>
                        </div>
                    </a>
                    <a href="www.audiophile.netlify.app">
                        <div className='flex flex-col' data-aos = 'zoom-in'>
                            <div>
                                <img className='max-w-full aspect-video' src="/assets/images/project-images/audiophile.png" alt="kadpay" />
                            </div>
                            <div className=' bg-black bg-opacity-50 rounded-b-md p-5 py-6 text-white opacity-95  '>
                                <p> <span className='font-bold' >Title</span>: AudioPhile</p>
                                <p> <span className='font-bold' >Link:</span> <a  href="www.audiophile.netlify.app">
                                    audiophile
                                    </a> 
                                </p>
                                <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT,NEXT.JS</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://paritiefid.netlify.app">
                        <div className='flex flex-col' data-aos = 'zoom-in'>
                            <div>
                                <img className='max-w-full aspect-video' src="/assets/images/project-images/paritiefid.png" alt="paritie" />
                            </div>
                            <div className=' bg-black bg-opacity-50 rounded-b-md p-5 py-6 text-white opacity-95  '>
                                <p> <span className='font-bold' >Title</span>: Paritie Furniture and Interior</p>
                                <p> <span className='font-bold' >Link:</span> <a href="https://paritiefid.netlify.app"> 
                                paritie
                                </a> </p>
                                <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, TYPESCRIPT</p>
                            </div>
                        </div>
                    </a>
                    <a href="http://crowdfund-landingpage.netlify.app">
                        <div className='flex flex-col' data-aos = 'zoom-in'>
                            <div>
                                <img className='max-w-full aspect-video' src="/assets/images/project-images/crowdfund.png" alt="crowdfund"   />
                            </div>
                            <div className=' bg-black bg-opacity-50 rounded-b-md p-5 py-6 text-white opacity-95  '>
                                <p> <span className='font-bold' >Title</span>: KadPay</p>
                                <p> <span className='font-bold' >Link:</span> 
                                    <a href="http://crowdfund-landingpage.netlify.app">
                                        crowdfund
                                        </a>
                                </p>
                                <p> <span className='font-bold' >Tech. Stack:</span> HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT,NEXT.JS</p>
                            </div>
                        </div>
                    </a>
               
                </div>
            </div>
        </section>

        {/* contact section */}
        <section className='w-full lg:px-32 md:px-16'>
            <div className='w-full flex flex-col '>
                <p className={` ${styles.contact} before:bg-blue-500  relative text-center text-3xl font-bold font-mono mb-16 `}>Contact Me</p>
                <div className='grid  sm:px-0 sm:grid-cols-2 grid-cols-1 sm:space-x-8 space-y-8 sm:space-y-0' >
                    <div data-aos = 'zoom-in' className='bg-zinc-100 rounded-b-md pb-4 ' >
                        <p className='text-2xl font-semibold bg-zinc-400 rounded-t-md py-2 pl-4'>CONTACT ADDRESS</p>
                        <div className='flex p-6 pb-0 items-start px-4'>
                            <p className='w-6 text-lg pt-[10px]'><GoLocation  className='' /> </p>
                            <div className='flex-1 ml-4'>
                                <p className='font-bold text-xl mb-2'>Location</p>
                                <p>24A, Ikaraworo Along Ado Ibrahim Street <br /> Okene, Kogi, State</p>
                            </div>
                        </div>
                        <div className='flex p-6 pb-0 px-4 items-start'>
                            <p className='w-6 text-lg pt-[10px]'><span className='mr-2'><AiTwotonePhone /> </span> </p>
                            <div className='flex-1 ml-4'>
                                <p className='font-bold text-xl mb-2'>Contact</p>
                                <p>+2347065786031 <br /> +12334567890</p>
                            </div>
                        </div>
                        <div className='flex p-6 pb-0 px-4 items-start'>
                            <p className='w-6 text-lg pt-[10px]'><FiMail className='' /> </p>
                            <div className='flex-1 ml-4'>
                                <p className='font-bold text-xl mb-2'>Message</p>
                                <p>itshamzy@gmail.com <br /> info@hamza.com</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos = 'zoom-in' className='bg-zinc-100 rounded-b-md pb-4 ' >
                        <p className='text-2xl font-semibold bg-zinc-400 rounded-t-md py-2 pl-4 mb-4'>SEND A MAIL</p>
                        <form action="#" className='flex flex-col px-4 pb-4'>
                           <div className='flex flex-col space-y-2 mb-4'>
                                <label htmlFor="email" className='font-bold'>Email</label>
                                <input type="email" id='email' placeholder='user@example.com' className=' bg-transparent border-2 focus:border-blue-500 p-3 rounded-md'  required  />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label htmlFor="message" className='font-bold'>Message</label>
                                <textarea name="message" id="message" placeholder='Well, i think...' className=' bg-transparent border-2 focus:border-blue-500 p-3 rounded-md' cols= {5} rows={4}></textarea>
                            </div>
                            <button className='mt-6 p-3 transition-all text-white duration-1000 ease-out  rounded-md bg-blue-500 hover:bg-blue-800'>Send Your Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
   </main>
  )
}

export default Main