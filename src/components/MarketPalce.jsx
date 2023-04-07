

import React from "react";



import NFT1 from "../assets/NFT1.jpg";
import NFT2 from "../assets/NFT2.jpg";
import NFT3 from "../assets/NFT3.jpg";
import telegram from '../assets/telegram1.png'

import insta from '../assets/instagram1.png'

import twitter from '../assets/twitter3.png'

import discord from '../assets/discord2.png'


const MarketPlace =()=>{

    return(

      <div className=" bg-siteblack min-h-screen p-5 md:10 text-gray-800 ">
         <div className='flex-1 py-8 sm:px-12 px-8 '>
               <div className='flex-1 flex justify-center flex-col xl:mt-0 my-16'>
                  <div className="flex flex-row w-full">
                      <h1 className='flex font-rajdhani font-bold text-white sm:text-4xl text-2xl head-text'>
                          Welcome to Pro Bulls MarketPalace <br/>Pro Bulls Collection
                      </h1>
                  </div>
          
                  <p className='font-rajdhani font-normal text-[24px] text-siteWhite my-6 '>
                    Comming Soon...
                  </p>

                </div>
          
            </div>
        <div className=" bg-purble-100  rounded-2xl p-5">
          <div className=" mx-auto  border border-white rounded-2xl">
              <div className="">
                <h2 className="text-center text-white font-semibold mt-2"> MarketPlace</h2>
                <p className="text-center text-white mt-3">The Pro Bulls NFT Collection Coming Soon... </p>
          </div>

          <div className="flex flex-wrap">
            <div className='w-1/3 py-5 text-center text-white fond-bold p-2  rounded-2xl'>
            <img src={NFT1} alt='nft1'/>
            </div>
            <div className="w-1/3 py-5 text-center text-white fond-bold p-2  rounded-2xl ">    
            
            <img src={NFT2} alt='nft1'/>
            </div>
            <div className="w-1/3 py-5 text-center text-white fond-bold p-2  rounded-2xl">
           <img src={NFT3} alt='nft1'/>
            </div>


            </div>
          </div>
        </div>
        <div className=' flex w-full font-rajdhani p-2 mt-20'>
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
};

export default MarketPlace;