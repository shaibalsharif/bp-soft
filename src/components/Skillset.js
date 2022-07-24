import FooterButton from './FooterButton'
import MiniTitle from './MiniTitle'
const Skillset = () => {
    return (
        <div>
            <MiniTitle
                text="My Skillset"
            />
            <div className='text-[38px] font-bold mx-[18%] text-center'>
                <h1 className='text-last-center' >Graphic Design, Interface Design</h1>
                <h1 className='text-center'>&amp;</h1>
                <h1 className=''>
                    User Experience</h1>
            </div>
            <FooterButton
                text={"My process"}
                visible={'true'} />
            <p className='max-w-[265px] mt-8 text-justify md:max-w-[350px] text-[#8f8f8f]' >I specialize in building complex web applications, leading front-end teams,
                digital product design and developing visual design systems. I enjoy creating
                effortless user experience and designing delightful digital products. The entire
                process of going from a concept to release and gathering user’s feedback on either client’s or
                my own products is what makes me wake up everyday!
                I worked with numerous clients from all around the world from early startups to well-established companies.
                I always seek new opportunities for cooperation on projects around interesting dashboards, design
                systems or landing pages. Let’s create something awesome together!</p>
            {/*
        
        ###Experience section### 
        mini hint
        Title
        description
       <FooterButton/>

    */}
        </div>
    )
}

export default Skillset