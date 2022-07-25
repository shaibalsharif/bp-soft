import React from 'react'
import FooterButton from './FooterButton'
import MiniTitle from './MiniTitle'

const AboutMe = () => {
  return (
    <div>
      <MiniTitle
      text={'about me'} />
      <h1 className='text-[38px] font-bold pr-20 pl-4 text-start leading-10 mb[-30px] '
      >Designing with passion for Problem Solving</h1>
      <FooterButton
      
      text={'follow Me Instagram'}
      visible={true}/>
    <p className='text-justify p-4 mt-6 text-[#989898]'>
    I’ve always been passionate about pixels and design projects and haven’t 
    stopped working and learning about new technologies . Other than sitting in from of my display
     I enjoy myself in casual sports, such as bowling or playing football with friends. </p>
<br/><p className='text-justify px-4 text-[#989898]'>
   I'm grateful that my job allows me to work from anywhere.  
   I’m active on Instagram where I share most of the and all info about my upcoming projects.</p>
   <br/>
   <p className='text-justify px-4 text-[#989898]'>
    I also like sharing my experiences on instagram
    </p>
    </div>
    
  )
}

export default AboutMe