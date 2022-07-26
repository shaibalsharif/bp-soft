import { FireIcon } from "@heroicons/react/solid"
const FooterButton = ({ text, icon, visible = false }) => {
    return (
        <div className={visible ? 'group text-center' : "group hidden  "}>
            <div className="uppercase text-[11px] tracking-[4px] transition ease-in-out delay-150 hover:translate-x-1.5 ">
                
                    <a className="pb-2 border-b-[2px] border-[#689af8]"><strong>{text}</strong>
                    <FireIcon className=" ml-4  h-4 w-4 inline mr-4" /></a>
                
            </div>
         
        </div>
    )
}

export default FooterButton