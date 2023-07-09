import { AiOutlinePrinter, AiTwotoneStop } from "react-icons/ai";
import { MdOutlineMinimize, MdClose } from "react-icons/md";
import { TbResize } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoHomeOutline, IoReloadCircleOutline } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import PropTypes from 'prop-types';
import icon from '../../public/images/facelogo.png'

const Titlebar = ({home}) => {
    const close = () => {
        window.close();
    }
    const reload = () => {
        window.location.reload();
    }
    const back = () => {
        window.history.back();
    }
    const forward = () => {
        window.history.forward();
    }
    const print = () => {
        window.print();
    }
    return (
        <>
            {/*Titlebar*/}
            <div className="flex items-center justify-between bg-[#4267B2] px-2">
                <div>
                    <p className="font-bold text-white">Netscape-( SweetBook )</p>
                </div>
                <div className="flex">
                    {/*titlebar icons*/}
                    <div className="bg-[#898F9C] animite shadow-[-0.8px_-1.5px_0px_0px_rgba(255,255,255,0.8)] border-r-2 border-b-2 border-slate-700">
                        <MdOutlineMinimize />
                    </div>
                    <div className="bg-[#898F9C] animite shadow-[-0.8px_-1.5px_0px_0px_rgba(255,255,255,0.8)] border-r-2 border-b-2 border-slate-700 mx-2">
                        <TbResize />
                    </div>
                    <div onClick={close} className="bg-[#898F9C] animite shadow-[-0.8px_-1.5px_0px_0px_rgba(255,255,255,0.8)] border-r-2 border-b-2 border-slate-700">
                        <MdClose />
                    </div>
                </div>
            </div>
            <div className="flex bg-[#898F9C] p-2 drop-shadow-sm border-b-2 cursor-default">  {/*iconbar*/}
                <div className="text-[0.7rem] flex px-4">
                    {/*fist iconbar*/}
                    <div onClick={back} className="flex cursor-pointer flex-col pt-2 items-center animite2 bg-[#898F9C] px-2 border-b-2 border-r-2 border-slate-700 shadow-[-1.3px_-1.5px_0px_0px_rgba(255,255,255,0.8)]">
                        <FaArrowLeft className="text-[#00008B]" />
                        <span>Back</span>
                    </div>
                    <div onClick={forward} className="flex flex-col pt-2 cursor-pointer items-center animite3 bg-[#898F9C] px-2 border-b-2 border-r-2 border-slate-700 shadow-[-0px_-1.5px_0px_0px_rgba(255,255,255,0.8)]">
                        <FaArrowRight className="text-[#00008B]" />
                        <span>Forward</span>
                    </div>
                    <div onClick={home} className="flex flex-col pt-2 items-center cursor-pointer animite bg-[#898F9C] px-2 border-b-2 border-r-2 border-slate-700 shadow-[-0px_-1.5px_0px_0px_rgba(255,255,255,0.8)]">
                        <IoHomeOutline className="text-[#00008B]" />
                        <span>Home</span>
                    </div>
                </div>
                <div className="text-[0.7rem] flex px-4">
                    {/*second iconbar*/}
                    <div onClick={reload} className="flex flex-col pt-2 items-center animite cursor-pointer bg-[#898F9C] px-2 border-b-2 border-r-2 border-slate-700 shadow-[-1.3px_-1.5px_0px_0px_rgba(255,255,255,0.8)]">
                        <IoReloadCircleOutline className="text-[#00008B]" />
                        <span>Reload</span>
                    </div>
                    <div onClick={print} className="flex flex-col pt-2 items-center animite bg-[#898F9C] cursor-pointer px-2 border-b-2 border-r-2  border-slate-700 shadow-[-0px_-1.5px_0px_0px_rgba(255,255,255,0.8)]">
                        <AiOutlinePrinter className="text-[#00008B]" />
                        <span>Print</span>
                    </div>
                    <div className="flex flex-col pt-2 items-center animite bg-[#898F9C] px-2 border-b-2 cursor-pointer border-r-2 border-slate-700 shadow-[-0px_-1.5px_0px_0px_rgba(255,255,255,0.8)]">
                        <AiTwotoneStop className="text-[#00008B]" />
                        <span>Stop</span>
                    </div>
                </div>
            </div>
            <div className="flex bg-[#898F9C] p-2 drop-shadow-lg items-center justify-between">{/*searchbar box*/}
                <div className="flex pl-4">
                    {/*searchbar*/}
                    <label htmlFor="Search" className="text-sm">Location:</label>
                    <input spellCheck="false" value={"https://sweetbook.com/debangan_paul/"} type="search" name="" id="" className="w-[45vw] md:w-[60vw] h-[20px] ml-2 border-t-2 border-l-2 border-slate-700 shadow-[2px_2px_0px_0px_rgb(255,255,255,0.4)] p-2 text-[0.7rem] in-Out" />
                    <div className="flex justify-center items-center animite px-1 h-[20px] border-t-2 border-r-2 border-b-2 border-slate-700 shadow-[2px_2px_0px_0px_rgb(255,255,255,0.3)] p-2 text-[0.7rem]">
                        <BiSolidDownArrow className="text-sm" />
                    </div>
                </div>
                <div>
                    {/*side logo*/}
                    <div id="logo" className="w-[50px] border-t-2 border-l-2 border-slate-700 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.7)]">
                        <img src={icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

Titlebar.propTypes = {
    home: PropTypes.object,
}

export default Titlebar
