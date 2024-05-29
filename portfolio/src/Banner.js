import React from 'react';
import emanac1 from './emanac1.svg'

function Banner() {
  return (
    <div className='mainContainer h-auto bg-gradient-to-r from-slate-700 to-black'>
        <div className='bannerContents flex items-center justify-center gap-16'>
            <div className='inscriptions-Buttons text-white space-y-7'>
                    <p className='font-thin font-Roboto text-lg'>Hello, My name is</p>
                    <p className='font-Oswald text-7xl font-extrabold'>Emmanuel Akpalu</p>
                    <div className='flex items-center gap-5'>
                        <div className='w-9 h-1 bg-orange-400'></div>
                        <p className='font-thin font-Roboto text-xl'>A Creative Front-End Developer</p>
                    </div>  
                    <button className='bg-orange-400 px-7 py-3 rounded-full hover:bg-orange-600 text-lg font-semibold font-Roboto'>See More</button>
            </div>
            <div>
                <img src={emanac1} />
            </div>
        </div>

    </div>
  )
}

export default Banner