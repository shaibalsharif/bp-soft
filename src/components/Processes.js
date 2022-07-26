import data from '../utils/datalist.js'
import ProcessCard from './ProcessCard.js'
const Processes = () => {
  return (
    <div className='mt-8 px-4 mx-4'>
      <h1 className='text-[51px] font-bold   md:block md:text-start  flex items-center 
     ' >
        Process <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span>
      </h1>
      <br />
      <br />
      <div className=' md:grid grid-cols-3'>
        {data.map((element, index) => (<ProcessCard
          className=""
          data={element}
          index={index} />))}
      </div>


      {/*
        
        ###Job/process section### 
       back Image
        Title
       <ProcessList/>
        

    */}
    </div>
  )
}

export default Processes