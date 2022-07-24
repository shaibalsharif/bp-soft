const FooterButton = ({ text, Icon, visible = false }) => {
    return (
        <div className={visible ? 'group' : "group opacity-0 md:opacity-100  "}>
            <div className="uppercase text-[11px] tracking-[4px] 
    transition ease-in-out delay-150 hover:translate-x-1.5 ">

                <a className="pb-2"><strong>{text}</strong></a>
            </div>
            <div className=" max-w-[90px]">
                <hr className="scale-x-105 transition ease-in-out delay-150 group-hover:translate-x-2 group-hover:scale-x-110
           mt-2 h-[1px] bg-[#689af8] border-none" />
            </div>
        </div>
    )
}

export default FooterButton