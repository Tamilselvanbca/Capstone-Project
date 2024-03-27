import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-50 flex items-center'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/*Left side*/}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-6xl font-bold leading-snug text-black '>Buy and Sell your <span className='text-blue-700'>Book Here</span></h2>
          <p className='md:w-4/5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio culpa sequi voluptatibus amet maiores repellat, earum ipsum modi id aspernatur deleniti architecto provident officiis quasi dolorum ducimus quam consequatur. Inventore?</p>
          <div>
            {/*<input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
           <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
  */}
           </div>
      
        </div>
         {/*Right side*/}
         
      </div>
    </div>
  )
}

export default Banner