import React from 'react'
import FooterButton from './FooterButton'
import { DocumentIcon } from '@heroicons/react/solid'

const Carrer = () => {
  return (
    <div className='mt-8 relative md:m-10'>
      <h1 className='text-[51px] font-bold  text-center mb[-30px] md:text-start'
      >Career <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span></h1>
      <br></br>
      <a href='https://drive.google.com/file/d/1G4UM0qIg0BttjvGs6_OAYBxjC0CK68bH/view?usp=sharing' className='hover:cursor-pointer'>
        <FooterButton
          classitem='md:text-end  md:absolute md:right-8 md:top-10'
          text={'get cv'}
          icon={<DocumentIcon className=" ml-4  h-4 w-4 inline mr-4" />}
          visible={true} /></a>
      <br></br>
      <div className='p-10 md:grid grid-cols-2'>
        <div className='mb-6 md:mb-10'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px]
           text-start border-l-[1px] border-[#6f9bf1]'>
            DriveMe Fleets
          </h1>
          <h3 className='font-light text-center text-[18px] my-2 md:text-start pl-2'>Ux Consult/Designer</h3>
          <h3 className='font-light text-[18px] text-[#6d6d6d] md:text-start pl-2'>Mar 2019-Present</h3>
        </div>

        <div className='mb-6'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px] text-start border-l-[1px]  border-[#6f9bf1] '>
            Meaninfulgigs
          </h1>
          <h3 className='font-light text-[18px] my-2 md:text-start pl-2 '>Creative Director</h3>
          <h3 className='font-light text-[18px] text-[#6d6d6d] md:text-start pl-2'>Dec 2017 - Present</h3>
        </div>
        <div className='mb-6'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px] text-start border-l-[1px]  border-[#6f9bf1] '>
            AlatbyWema
          </h1>
          <h3 className='font-light text-[18px] mb-2 mt-2 md:text-start pl-2'>Product Designer</h3>

        </div>

        <div className='mb-6'>
          <h1 className='leading-[2px] pl-2 pb-2 font-bold text-[24px] text-start border-l-[1px]  border-[#6f9bf1] '>
            Mckinsey
          </h1>
          <h3 className='mt-2 font-light text-[18px] mb-2 md:text-start pl-2'>Ui Designer</h3>

        </div>
      </div>
    </div>
  )
}

export default Carrer