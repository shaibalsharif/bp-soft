import FooterButton from './FooterButton'
import MiniTitle from './MiniTitle'
const Skillset = ({text}) => {
    return (
        <div className='mt-4 md:flex justify-between items-center'>
            <div className='md:w-[50%] md:text-start md:mx-4'>
                <MiniTitle
                    text={"My Skillset"}
                />
                <div className='text-[38px] font-bold leading-10 mt-4 '>
                    <h1 className=' md:text-start' >Graphic Design, Interface Design <span className='block md:inline'>&amp;</span> User Experience</h1>
                </div>
                <br />
                <FooterButton
                    classitem={'md:text-start'}
                    text={"My process"}
                    visible={true} />
            </div>

            <p className=' mt-16 text-justify md:w-[58%] text-[18px] leading-[26px] p-4' >{text}</p>
        </div>
    )
}

export default Skillset