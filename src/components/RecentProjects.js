import FooterButton from "./FooterButton"
import  {FireIcon} from '@heroicons/react/solid'

import ProjectCards from "./ProjectCards"
const RecentProjects = () => {
  return (
    <div className="mt-8">
        <h1 className='text-[51px] font-bold  text-center mb[-30px]'>Recent</h1>
        <h1 className='text-[51px] font-bold  text-center mt-[-30px]'>Projects 
        <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span></h1>

        <div>
           <ProjectCards/>
           
        </div>
        <FooterButton
        text={"MY Dribble"}
        icon= {'FireIcon'}
        visible={true}/>
    </div>
  )
}

export default RecentProjects