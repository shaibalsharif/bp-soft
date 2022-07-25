import {
  ChevronLeftIcon, ChevronRightIcon, 
  
} from '@heroicons/react/outline'
import { useState } from 'react'
const ProjectCards = () => {


  const [nextclicked, setNextClicked] = useState(false)

  const changeClicked = () => {
    if(nextclicked){
      document.getElementById('secondRadio').checked=false;
    }
    else{
     document.getElementById('firstRadio').checked=false;
    }
    setNextClicked(!nextclicked);
  }
  return (
    <div className=' '>
      <div className={nextclicked ? 'hidden' : 'firstContainer flex flex-col justify-center md:flex-row items-center' }>
      <ChevronRightIcon onClick={changeClicked} className='h-20 w-20 border-2 border-blue-500 rounded-[40px] text-black  absolute bg-white opacity-50 right-10' />
       
        <div className='Image-1 m-[20px] basis-[50%]'>
          <img
            className='rounded-3xl'
            src='../../assets/images/pic1.jpg' />
        </div>
        <div className='basis-[50%]'>
          <div className='Image-2 m-[20px] '>
            <img
              className='rounded-3xl'
              src='../../assets/images/pic2.png' />
          </div>
          <div className='Image-3 m-[20px]'>
            <img
              className='rounded-3xl'
              src='../../assets/images/pic3.png' />
          </div>
        </div>

      </div>
      <div className={nextclicked ? 'firstContainer flex flex-col justify-center md:flex-row items-center' : 'hidden'}>
        <ChevronLeftIcon onClick={changeClicked} className='h-20 w-20 border-2 border-blue-500 rounded-[40px] text-black  bg-white opacity-50 absolute left-10' />

        <div className='Image-4  m-[20px] basis-[50%]'>
          <img
            className='rounded-3xl'
            src='../../assets/images/pic4.png' />
        </div>
        <div className='basis-[50%]'>
          <div className='Image-5 m-[20px]'>
            <img
              className='rounded-3xl'
              src='../../assets/images/pic5.jpg' />
          </div>
          <div className='Image-6 m-[20px]'>
            <img
              className='rounded-3xl'
              src='../../assets/images/pic6.jpg' />
          </div>
        </div>

      </div>
     
    
        <input type='radio' id="firstRadio" defaultChecked  onChange={changeClicked} />
        <input className='ml-2' type='radio' id='secondRadio'   onChange={changeClicked} />
      

    </div>

  )
}

export default ProjectCards