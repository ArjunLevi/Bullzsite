
import React from "react";
import img from '../assets/67.png'

import telegram from '../assets/telegram1.png'

import insta from '../assets/instagram1.png'

import twitter from '../assets/twitter3.png'

import discord from '../assets/discord2.png'


const RoadMap =()=>{

    return(
      <div className=" bg-siteblack min-h-screen p-10  ">
      <div className='flex  p-3 w-full'>
         <div className=' m-2 w-1/2 '>
            <div className=" pl-10 ">
                <h1 className='flex font-rajdhani font-bold text-white sm:text-5xl text-2xl head-text'>
                    Upcomming Events on Pro Bulls
             </h1>
             <p className='font-rajdhani font-normal text-[24px] text-siteWhite my-6 '>
             To build a web-3 Space
especially via NFTs based
on Traditional Sport,BULL
(JALLIKATTU)
                  </p>
            </div>
          </div>
          <div className="w-1/2 p-5 text-white">
              <img src={img} alt="Roadmap"/>
          </div>
       </div>

       <div className="font-rajdhani font-normal text-center">
        <h1 className="text-2xl text-white">  Road Map

        </h1>
      
          <div class="timeline">
            <div class="container left ">
             <div class="content">
                <h1 className="font-rajdhani">2023 Q3 - Q4 </h1>
                 <li> Collect NFTs to be realesed on early 2023 </li>
                    <li> Start with an 100 Registrations </li>
                      <li> To pull an Organic Buyers on second phase of NFTs </li>
    </div>
  </div>
  <div class="container right">
    <div class="content">
    <h2>2024 Q1-Q2</h2>
      <li>Earn a membership to Play PRO-BULLS Metagame by active participations in NFT Society </li>
       <li> To assign a utility project to make NFTs Sustainable </li>
    </div>
  </div>
  <div class="container left">
    <div class="content">
     <h2>2024  Q3 - Q4 </h2>
      <li>Emerge as a PRO-Player to Earn virtual Lands and Venues </li>
      <li> Enduring Web3 Community </li>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2025</h2>
      <li> Upcoming </li>
    </div>
</div>
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

export default RoadMap;