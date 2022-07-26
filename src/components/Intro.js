import FooterButton from "./FooterButton"
const Intro = () => {
  return (
    <div className="ml-8">
    <div className=' text-center my-10 bg-[url("../public/bg.jpg")] h-screen bg-cover bg-left-bottom
    md:bg-[url()] flex basis-1/2 justify-around items-center lg:px-24'>
      <div className='textBox flex flex-col md:items-start' >
        <h1 className='font-bold text-[28px] lg:text-3xl '>
          Hello, it's me
        </h1>
        
        <h1 className='text-[70px] font-bold lg:text-8xl '>
          Ojieame<span className='text-[#5f99ff]'>.</span>
        </h1>
        <p className='max-w-[265px] mt-2 text-justify md:max-w-[350px]' 
        >An enthusiastic product designer currently shaping the future of
          software development by designing smooth user-interfaces that promote user
          interaction with information and data. While traveling around the world.</p>
        <br></br>
        <FooterButton
        className=""
        text='Scroll for More'
        />
      </div>
      <div className='imageBox basis-1/2 hidden md:block'>
          <img
           src='../bg.jpg'
          alt='pictd'
          className='h-180 w-150'
         />

      </div>
      </div>
    </div>
  )
}

export default Intro