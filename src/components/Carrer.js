import React from 'react'
import FooterButton from './FooterButton'

const Carrer = () => {
  return (
    <div className=''>
      <h1 className='text-[51px] font-bold  text-center mb[-30px] '
      >Carrer <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span></h1>
      <br></br>
      <FooterButton
        text={'get cv'}
        visible={true} />
      <br></br>
      <div className='flex flex-col items-start p-10'>
        <div className='mb-6'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px] text-start border-l-[1px] border-hei border-[#6f9bf1] '>
            DriveMe Fleets
          </h1>
          <h3 className='font-light text-[18px] mb-2'>Ux Consult/Designer</h3>
          <h3 className='font-light text-[18px] text-[#6d6d6d]'>Mar 2019-Present</h3>
        </div>

        <div className='mb-6'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px] text-start border-l-[1px] border-hei border-[#6f9bf1] '>
            Meaninfulgigs
          </h1>
          <h3 className='font-light text-[18px] mb-2'>Creative Director</h3>
          <h3 className='font-light text-[18px] text-[#6d6d6d]'>Dec 2017 - Present</h3>
        </div>
        <div className='mb-6'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px] text-start border-l-[1px] border-hei border-[#6f9bf1] '>
            AlatbyWema
          </h1>
          <h3 className='font-light text-[18px] mb-2'>Product Designer</h3>

        </div>

        <div className='mb-6'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px] text-start border-l-[1px] border-hei border-[#6f9bf1] '>
            Mckinsey
          </h1>
          <h3 className='font-light text-[18px] mb-2'>Ui Designer</h3>

        </div>
      </div>
    </div>
  )
}

export default Carrer