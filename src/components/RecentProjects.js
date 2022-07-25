import FooterButton from "./FooterButton"

import ProjectCards from "./ProjectCards"
const RecentProjects = () => {
  return (
    <div>
        <h1 className='text-[51px] font-bold  text-center mb[-30px]'>Recent</h1>
        <h1 className='text-[51px] font-bold  text-center mt-[-30px]'>Projects 
        <span className='font-bold text-[#689af8] text-[35px] pl-4'>+</span></h1>

        <div>
           <ProjectCards/>
           
        </div>
        <FooterButton
        text={"MY Dribble"}
        visible={true}/>
    </div>
  )
}

export default RecentProjects