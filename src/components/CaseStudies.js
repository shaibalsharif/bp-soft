import React from 'react'

const CaseStudies = () => {
  return (
    <div>
      <h1 className='text-[51px] font-bold  text-center mt-[-30px]'>Case Studies 
        <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span></h1>
        <div className='md:flex items-center justify-center'>
          <img
          className='m-4 rounded-2xl md:rounded-3xl w-[40%] h-[40%]'
          src='../../assets/images/pic1.jpg'
          />
            <img
             className='m-4 rounded-2xl md:rounded-3xl w-[40%] h-[40%]'
          src='../../assets/images/pic2.png'
          />
        </div>
    </div>
  )
}

export default CaseStudies