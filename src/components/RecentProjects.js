import FooterButton from "./FooterButton"
import { GlobeAltIcon } from '@heroicons/react/solid'

import ProjectCards from "./ProjectCards"
const RecentProjects = () => {
  return (
    <div className="mt-8 relative">
     <div className="md:absolute">
     <h1 className='text-[51px] font-bold ml-4 text-start mb[-30px]'>Recent</h1>
      <h1 className='text-[51px] font-bold ml-4 text-start mt-[-30px]'>Projects
        <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span></h1>

     </div>
      <div>
        <ProjectCards />

      </div>
      <FooterButton
      classitem="md:hidden"
        text={"MY Dribble"}
        icon={<GlobeAltIcon className=" ml-4  h-4 w-4 inline mr-4"/>}
        visible={true} />
    </div>
  )
}

export default RecentProjects