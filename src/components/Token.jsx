import React from "react";
import Slider from "react-slick";




import telegram from '../assets/telegram1.png'

import insta from '../assets/instagram1.png'

import twitter from '../assets/twitter3.png'

import discord from '../assets/discord2.png'

import img from '../assets/img12.jpg'


const Token =()=>{


return(
  <div className=" bg-siteblack min-h-screen p-10   ">
     <div className='flex  p-3 w-full'>
        <div className=' m-2 w-1/2 '>
           <div className=" pl-10 ">
               <h1 className='flex font-rajdhani font-bold text-white sm:text-5xl text-2xl head-text'>
                   The Bulls Token
            </h1>
            <p className='font-rajdhani font-normal text-[24px] text-siteWhite my-6 '>
                   The Bull token is officially Comming Soon...
                     bringing  Bulls a step closer to building the ultimate Web3 gaming ecosystem.
                       BULL in-game utility and benefits to its holders, empowering the growth of Web3
           </p>
           </div>
         </div>
         <div className="w-1/2 p-5 text-white">
             <img src={img} alt="Token"/>
         </div>
         
      </div>

      <div className=" border border-white m-10 p-11 text-center  rounded-2xl p-5">
        <h1 className="text-2xl font-rajdhani font-bold text-white">
            Enebling the Web3 Economy    
         </h1>
         <p className='font-rajdhani font-normal text-[20px] text-siteWhite my-6 '>
         BULL is an ERC-20 utility token, fully audited by Pro Team.
          The token is used for transactions on Bull Layer 2 scaling protocol.
          
           </p>
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

export default Token;