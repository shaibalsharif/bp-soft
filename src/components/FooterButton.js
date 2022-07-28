import { FireIcon } from "@heroicons/react/solid"
const FooterButton = ({ text, icon=<></>, visible = false,classitem="" }) => {
    return (
        <div className={visible ? `group text-center ${classitem}` : `group hidden  md:block text-start ${classitem}`}>
            <div className="uppercase text-[11px] tracking-[4px] transition ease-in-out delay-150 hover:translate-x-1.5 ">
                
                    <a className="pb-2 border-b-[2px] border-[#689af8]"><strong>{text}</strong>
                    {icon}</a>
                
            </div>
         
        </div>
    )
}

export default FooterButton