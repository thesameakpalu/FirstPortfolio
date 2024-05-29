import React from 'react'

function Navbar() {
  return (
    <div className='mainContainer bg-black h-12 w-full'>
        <div className='flex items-center justify-between mx-20'>        
                <div>
                    <p className=' font-semibold text-3xl '> <span className='text-gray-500'>E</span><span className='text-orange-400'>manac.</span></p>
                </div>
                <div className='tabList  text-white w-4/12'>
                    <ul className='flex justify-between items-center'>
                        <li className='text-orange-300'>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Resume</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>

                </div>
        </div>
     </div>
  )
}

export default Navbar