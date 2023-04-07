import styles from '../styles';

import telegram from '../assets/telegram1.png'

import insta from '../assets/instagram1.png'

import twitter from '../assets/twitter3.png'

import discord from '../assets/discord2.png'

import ContactImg from '../assets/6.png'



const Contact =()=>{

    return(
        <div className='bg-siteblack min-h-screen flex xl:flex-row flex-col relative p-14'>
        <div className='flex-1 py-8 sm:px-12 px-8 '>
           <div className='flex-1 flex justify-center flex-col xl:mt-0 my-16'>
              <div className="flex flex-row w-full">
                  <h1 className='flex font-rajdhani font-bold text-white sm:text-4xl text-2xl head-text'>
                      Get in Touch
                  </h1>
              </div>
      
              <p className='font-rajdhani font-normal text-[24px] text-siteWhite my-6 '>
                Comming Soon...
              </p>

            </div>
         </div>
         <div className='max-w-[1240px] m-auto px-2 py-16 w-full flex flex-col items-center'>
        <h2 className='text-white'>Get In Touch</h2>
        <div className=' grid max-h-fit gap-1 grid-cols-4 lg:grid-cols-6 md:gap-2'>
          {/* left */}
          <div className='col-span-4 hidden md:grid lg:col-span-2 w-full max-h-fit rounded-xl p-4 '>
          <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl dark:opacity-75 overlay'
                  src={ContactImg}
                  width='200'
                  height='190'
                  alt='/'
                />
              </div>
              <div>
                <p className='uppercase pt-8 text-white'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
               
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-4 lg:col-span-3 lg:col-start-4 w-full h-full rounded-xl lg:p-4'>
            <div className='p-4 '>
              <form
                action='https://getform.io/f/bfff5953-a35c-44c8-888a-b58e3655fe4d'
                method='POST'
                encType ='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-2 w-full py-1 '>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-white'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-600 opacity-25 dark:opacity-50'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-white'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-900 opacity-25 dark:opacity-50'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm text-white py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900 opacity-25 dark:opacity-50'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm text-white py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900 opacity-25 dark:opacity-50'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm text-white py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-2 border-gray-900 opacity-25 dark:opacity-50'
                    rows='2'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4  mt-4 shadow-md text-white hover:bg-gray-700'
                >
                  Send Message 
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='relative  '>
        </div>
      </div>
      <div className=' rounded-2xl flex w-full font-rajdhani p-2 mt-20'>
                    <div className=' w-1/4 rounded-2xl  p-2 '>
                    <h1 className='text-2xl text-white mt-5'>  
                         PRO Bulls
                        </h1>
                      <ul className='flex flex-row '> 
                       
                        <li className='w-[25px] h-[25px] bg-white mt-8 m-2 cursor-pointer rounded-2xl'>
                          <img src={telegram} alt='Telegram'/>
                        </li>
                        <li className='w-[25px] h-[25px] bg-white mt-8 m-2 cursor-pointer rounded-2xl'>
                          <img src={insta} alt='Instagram'/>
                        </li>
                        <li className='w-[25px] h-[25px] bg-white mt-8 m-2 cursor-pointer rounded-2xl'>
                          <img src={twitter} alt='twitter'/>
                        </li>
                        <li className='w-[25px] h-[25px] bg-white mt-8 m-2 cursor-pointer rounded-2xl'>
                          <img src={discord} alt='discord'/>
                        </li>
                       
                      </ul>
                      <h1 className='text-white mt-8 '>
                            @Copyrights 2023 Bulls <br/>
                            Terms|Privacy
                        </h1>
                      
                    </div>

                    <div className=' w-1/4 rounded-2xl flex flex-col p-2 '>
                      <h1 className='text-2xl text-white mt-5'>   
                        Eco System

                      </h1>
                      
                        <div className='flex-col text-white mt-5'>
                           Games
                        </div>
                        <div className='flex-col text-white mt-5'>
                           Nodes
                        </div>
                        <div className='flex-col text-white mt-5'>
                           FAQ
                        </div>
                    </div>

                    <div className=' w-1/4 rounded-2xl flex flex-col p-2 '>
                      <h1 className='text-2xl text-white mt-5'>   
                        For Developers

                      </h1>
                      
                        <div className='flex-col text-white mt-5'>
                           get Started
                        </div>
                        <div className='flex-col text-white mt-5'>
                           Our Solution
                        </div>
                        
                    </div>

                    <div className=' w-1/4 rounded-2xl flex flex-col p-2 '>
                      <h1 className='text-2xl text-white mt-5'>   
                        General

                      </h1>
                      
                        <div className='flex-col text-white mt-5'>
                           About 
                        </div>
                        <div className='flex-col text-white mt-5'>
                           News
                        </div>
                        <div className='flex-col text-white mt-5'>
                           Contact us
                        </div>
                    </div>
               
                </div>
          
            
        </div>
     )
    
    }
export default Contact;