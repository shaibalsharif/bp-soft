import FooterButton from "./FooterButton"
import { FireIcon } from '@heroicons/react/solid'

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
        icon={'FireIcon'}
        visible={true} />
    </div>
  )
}

export default RecentProjects