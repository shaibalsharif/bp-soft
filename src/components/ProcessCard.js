const ProcessCard = ({data,index}) => {


  return (
    <div className="mb-4 relative">
        <h1 className="-left-6 -top-10 text-start absolute text-[#1a1919] text-[80px] font-bold -z-10 ">0{index+1}</h1>
        <h1 className=" relative text-[24px] text-center font-bold mb-[20px] md:text-start">{data.title}</h1>
        <div className="flex flex-col items-center md:items-start">
          {data.list.map(item=>(<h2 className="pb-2 text-[18px]">{item}</h2>))}
        </div>
       
    </div>
  )
}

export default ProcessCard