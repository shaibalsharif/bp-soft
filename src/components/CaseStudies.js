import React from 'react'

const CaseStudies = () => {
  return (
    <div className='md:mx-6 mt-10 md:mt-16'>
      <h1 className='text-[51px] font-bold  text-center mt-[-30px] leading-[48px]
      md:text-start '>Case Studies 
        <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span></h1>
        <div className='flex flex-col md:flex-row items-center justify-center md:mx-4'>
          <img
          className='md:w-[50%] md:h-[50%] m-4 rounded-2xl md:rounded-3xl w-[70%] h-[70%]'
          src='../../assets/images/pic1.jpg'
          />
            <img
             className=' md:w-[50%] md:h-[50%] m-4 rounded-2xl md:rounded-3xl w-[70%] h-[70%]'
          src='../../assets/images/pic2.png'
          />
        </div>
    </div>
  )
}

export default CaseStudies