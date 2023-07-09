import PropTypes from 'prop-types'
import { useRef } from 'react';

const CommentBox = () => {
    const boxRef = useRef();
    const subRef = useRef();
    const submitepost = () => {
        boxRef.current.style.display = "none";
        subRef.current.style.display = "block";
    }
    return (
        <>
            <p ref={subRef} className='mt-4 text-center text-[0.7rem] md:text-[1rem] text-gray-500 hidden'>thank you for submission. Although it is fake but i am thankfull for your time</p>
            <div ref={boxRef}>
                <div className="flex flex-col items-center mt-4 justify-center text-[0.8rem] md:text-[1rem] w-full border-2 p-2 border-dashed bg-[#D3D3D3] border-slate-700 ">
                    <div className="w-[90%] border-2 p-2  border-slate-300 bg-white ">
                        {/* <input type="text" className="w-full h-auto " value={defaultxt} /> */}
                        <textarea className="w-full h-auto p-2 in-Out" placeholder='comment here'></textarea>
                    </div>
                    <div className="w-[90%] flex justify-end">
                        <p className="bg-[#4267B2] text-white w-fit px-4 my-2" onClick={submitepost}>Post comment</p>
                    </div>
                </div>
            </div>
        </>
    )
}

CommentBox.propTypes = {
    defaultxt: PropTypes.string,
}

export default CommentBox
