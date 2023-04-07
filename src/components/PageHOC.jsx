import logo from '../assets/12.png'
import styles from '../styles';


const PageHOC =() => {


    return (
        <div className='bg-siteblack p-5 py-8'>
            
                <div className='flex  ml-8 '>
                    <img src={logo} alt="logo" className='w-[190px] h-[48px] object-contain cursor-pointer'/>
                  <ul className='flex pr-5 py-3 ml-10 '>
                   <li className='pr-5 mr-5 text-white font-bold cursor-pointer hover:bg-[#4B5563] px-3 rounded'><a href='/'>Home</a></li>
                   <li className='pr-5 mr-5 text-white font-bold cursor-pointer hover:bg-[#4B5563] px-3 rounded'><a href='/marketplace'> MarketPlace</a></li>
                   <li className='pr-5 mr-5 text-white font-bold cursor-pointer hover:bg-[#4B5563] px-3 rounded'><a href='/token'> Token</a></li>
                   <li className='pr-5 mr-5 text-white font-bold cursor-pointer hover:bg-[#4B5563] px-3  rounded'><a href='roadmap'> RoadMap</a></li>
                   <li className='pr-5 mr-5 text-white font-bold cursor-pointer hover:bg-[#4B5563] px-3  rounded'><a href='contact'> Contact</a></li>
                  </ul>

                  <a className='flex text-white  font-bold ml-auto cursor-pointer px-3 py-3 rounded hover:bg-[#4B5563]'> 
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                     </svg>
    
                        Connect Wallet
                  </a>
                </div>
        </div>



  
    )
  }
  
  export default PageHOC
  