import PropTypes from 'prop-types'
import { useRef } from 'react';
import CommentBox from './pagecomps/CommentBox';

const PBoxImg = ({ user, title, subtitile, imgs, date, userpic, urls, type }) => {
    const visibilty = useRef();
    const like = useRef();
    const showcomment = () => {
        visibilty.current.classList.toggle('hidden');
    }
    const likepost = () => {
        like.current.style.color = "#4267B2";
        like.current.style.fontWeight = "bold";
    }
    return (
        <>
            <div className="w-[90vw] md:w-[55vw] flex h-fit bg-white mt-8">
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-sky-200">
                    <img src={userpic} alt="" className='h-[80px] object-cover w-[80px] md:w-[100px] opacity-80 md:h-[100px]' />
                </div>
                <div className=" px-4 w-full flex flex-col">
                    <p className=""><span className="font-bold">{user}</span> posted a <span className="text-[#4267B2]">{type}.</span></p>
                    <p className="text-[0.8rem] mt-0 md:mt-4 text-justify">{title}</p>
                    <p className="text-[0.8rem]">{subtitile}</p>
                    <div className="w-[90%]  text-[0.8rem] mt-2">
                        <a href={urls} target='blank'>
                            <img src={imgs} alt="" />
                        </a>
                    </div>
                    <div className="flex w-[80%] text-[0.7rem] mt-4 cursor-pointer">
                        <p>{date}</p>
                        <p className="mx-4" onClick={showcomment}>Comments</p>
                        <p ref={like} onClick={likepost}>Like</p>
                    </div>
                </div>
            </div>
            <div ref={visibilty} className='hidden'>
                <CommentBox />
            </div>
        </>
    )
}

PBoxImg.propTypes = {
    user: PropTypes.string,
    title: PropTypes.string,
    subtitile: PropTypes.string,
    imgs: PropTypes.string,
    urls: PropTypes.string,
    date: PropTypes.string,
    userpic: PropTypes.string,
    type: PropTypes.string,
}

export default PBoxImg
