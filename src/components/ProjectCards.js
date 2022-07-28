import {
  ChevronLeftIcon, ChevronRightIcon,GlobeAltIcon

} from '@heroicons/react/outline'
import { useState } from 'react'
import FooterButton from './FooterButton'
const ProjectCards = () => {


  const [nextclicked, setNextClicked] = useState(false)

  const changeClicked = () => {
    if (nextclicked) {
      document.getElementById('secondRadio').checked = false;
    }
    else {
      document.getElementById('firstRadio').checked = false;
    }
    setNextClicked(!nextclicked);
  }
  return (
    <div className=' '>
      <div className={nextclicked ? 'hidden' : 'firstContainer flex flex-col justify-center md:flex-row items-center'}>
        <ChevronRightIcon onClick={changeClicked} className='h-20 w-20 border-2 border-blue-500 rounded-[40px] text-black 
         absolute bg-white opacity-50 -right-14' />

        <div className='Image-1 m-[20px] -mb-[10px] basis-[50%]'>
          <div className='relative group'>
            <img
              className='rounded-xl group-hover:opacity-60'
              src='../../assets/images/pic1.jpg' />
            <h1 className=' opacity-0 group-hover:opacity-100  font-bold absolute bottom-6 left-10 border-l-[1px] border-[#6f9bf1] pl-4  ' >
              weamobile
            </h1>
          </div>
          <FooterButton
            classitem="absolute mt-[50px]"
            text={"MY Dribble"}
            icon={<GlobeAltIcon className=" ml-4  h-4 w-4 inline mr-4"/>}
            visible={false} />
        </div>
        <div className='basis-[50%]'>
          <div className='Image-2 m-[20px] group relative'>
            <img
              className='rounded-xl group-hover:opacity-60'
              src='../../assets/images/pic2.png' />
               <h1 className=' opacity-0 group-hover:opacity-100 
            font-bold absolute bottom-6 left-10 border-l-[1px] border-[#6f9bf1] pl-4  ' >
              weamobile
            </h1>
          </div>
          <div className='Image-3 m-[20px] relative group'>
            <img
              className='rounded-xl group-hover:opacity-60'
              src='../../assets/images/pic3.png' />
               <h1 className=' opacity-0 group-hover:opacity-100  
            font-bold absolute bottom-6 left-10 border-l-[1px] border-[#6f9bf1] pl-4  ' >
              weamobile
            </h1>
          </div>
        </div>

      </div>
      <div className={nextclicked ? 'firstContainer flex flex-col justify-center relative md:flex-row items-center' : 'hidden'}>
        <ChevronLeftIcon onClick={changeClicked} className='h-20 w-20 border-2 border-blue-500 rounded-[40px] text-black  bg-white opacity-50
         absolute -left-10' />

        <div className=' Image-4  m-[20px] -mb-[10px] basis-[40%]'>
          <div className='relative group'>
            <img
              className='rounded-xl group-hover:opacity-60'
              src='../../assets/images/pic4.png' />

            <h1 className=' opacity-0 group-hover:opacity-100 
            font-bold absolute bottom-6 left-10 border-l-[1px] border-[#6f9bf1] pl-4  ' >
              weamobile
            </h1>
          </div>

          <FooterButton
            classitem="absolute mt-[50px]"
            text={"MY Dribble"}
            icon={<GlobeAltIcon className=" ml-4  h-4 w-4 inline mr-4"/>}
            visible={false} />

        </div>
        <div className='basis-[50%] '>
          <div className='Image-5 m-[20px] relative group'>
            <img
              className='rounded-xl group-hover:opacity-60'
              src='../../assets/images/pic5.jpg' />
               <h1 className=' opacity-0 group-hover:opacity-100 
            font-bold absolute bottom-6 left-10 border-l-[1px] border-[#6f9bf1] pl-4  ' >
              weamobile
            </h1>
          </div>
          <div className='Image-6 m-[20px] relative group'>
            <img
              className='rounded-xl group-hover:opacity-60'
              src='../../assets/images/pic6.jpg' />
               <h1 className=' opacity-0 group-hover:opacity-100 
            font-bold absolute bottom-6 left-10 border-l-[1px] border-[#6f9bf1] pl-4  ' >
              weamobile
            </h1>
          </div>
        </div>

      </div>


      <input type='radio' id="firstRadio" defaultChecked onChange={changeClicked} />
      <input className='ml-2' type='radio' id='secondRadio' onChange={changeClicked} />


    </div>

  )
}

export default ProjectCards