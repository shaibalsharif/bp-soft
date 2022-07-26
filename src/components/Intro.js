import FooterButton from "./FooterButton"
const Intro = () => {
  return (
    <div className="mt-36">
    <div className="bg-[url('https://img.freepik.com/premium-photo/portrait-dark-haired-young-man-black-background_78450-1732.jpg?w=826')]
     bg-contain bg-no-repeat md:bg-none md:flex  md:justify-center ">
      <div className=' mx-8 md:block md:w-[40%]' >
        <h1 className='font-bold text-[28px] text-center md:text-start'>
          Hello, it's me
        </h1>
        
        <h1 className='font-bold  text-[66px]  md:text-start '>
          Ojieame<span className='text-[#5f99ff]'>.</span>
        </h1>
        <p className='text-justify  text-[16px]  ' 
        >An enthusiastic product designer currently shaping the future of
          software development by designing smooth user-interfaces that promote user
          interaction with information and data. While traveling around the world.</p>
        <br></br>
        <FooterButton
        
        text='Scroll for More'
        />
      </div>
      <div className='imageBox hidden md:block w-[40%]'>
          <img
           src='https://img.freepik.com/premium-photo/portrait-dark-haired-young-man-black-background_78450-1732.jpg?w=826'
          alt='pictd'
          
          className='h-180 w-150'
         />

      </div>
      </div>
    </div>
  )
}

export default Intro