import React from 'react'
import FooterButton from './FooterButton'
import MiniTitle from './MiniTitle'
import { SupportIcon } from '@heroicons/react/solid'
const AboutMe = ({text}) => {
  return (
    <div className='md:flex justify-between items-center'>
      <div className='md:w-[60%] md:text-start md:mx-4'>
        <MiniTitle
        
          text={'about me'} />
        <h1 className='text-[38px] md:text-[41px] md:leading-10 md:mt-6 
        font-bold pr-20 pl-4 md:pl-0 md:mr-2 text-start leading-10 mb[-30px] '
        >Designing with passion for Problem Solving</h1>
        <br />
        <FooterButton
           classitem={'md:text-start'}
          text={'follow Me Instagram'}
          icon={<SupportIcon className=" ml-4  h-4 w-4 inline mr-4" />}
          visible={true} />
      </div>
      <div className='md:w-[50%] mb-12'>
        <p className='text-justify p-4 mt-6 text-[#989898]'>
         {text[0]} </p>
        <br /><p className='text-justify px-4 text-[#989898]'>
          {text[1]}</p>
        <br />
        <p className='text-justify px-4 text-[#989898]'>
        {text[1]}
        </p>
      </div>

    </div>

  )
}

export default AboutMe