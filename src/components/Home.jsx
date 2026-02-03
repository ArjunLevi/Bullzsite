
import { attack} from '../assets';
import styles from '../styles';

import telegram from '../assets/telegram1.png'

import insta from '../assets/instagram1.png'

import twitter from '../assets/twitter3.png'

import discord from '../assets/discord2.png'
import Spline from '@splinetool/react-spline';

import image from '../assets/13.png'

const Home =()=>{

    return(

        <div className='bg-siteblack min-h-screen flex xl:flex-row  relative'>
                <Spline className="absolute opacity-30 z-10 w-20" scene="https://prod.spline.design/ZmR3zwRQAeEAzQmS/scene.splinecode"/>
            <div className='flex-1 py-8 sm:px-12 px-8 '>   
               <div className='flex-1 flex justify-center flex-col xl:mt-0 my-16'>
                  <div className="flex flex-row w-full">
                      <h1 className='flex font-rajdhani font-bold text-white sm:text-4xl text-2xl head-text'>
                                 The First Virtual Reality (VR) Game <br/> 
                                  on Traditional Bull 
                              
                      </h1>
                  </div>
          
                  <p className='font-rajdhani font-normal text-[20px] text-siteWhite my-6 '>
                  This is a First VIRTUAL REALITY(VR) Game
                       Based on Traditional Bull Sport Named
                          JALLIKATTU  in Tamilnadu,India
                  </p>

                </div>

                <div className=''>
    
                </div>

                <div className=' rounded-2xl flex w-full font-rajdhani p-2'>
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

                    </div>
               
                </div>
          
            </div>
    
       </div>
       
    )
}


export default Home;
