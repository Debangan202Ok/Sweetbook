import myimg from '../../public/images/mypic.jpeg'

const Sidebar = () => {
    return (
        <div>
            <div className="flex flex-col items-center w-[90vw] md:w-[20vw] h-fit bg-white m-4 border-2 border-[#4267B2]">
                <p className="bg-[#4267B2] w-full p-2 text-white">My Profile</p>
                <div className="p-4 flex flex-col items-center">
                    <div className="my-4 border-2 border-slate-700">
                        <img src={myimg} alt="" className='w-[200px] h-[200px] object-cover ' />
                    </div>
                    <div>
                        <p className="font-bold text-[#4267B2]">Debangan Paul Chowdhury</p>
                        <p className="text-[#4267B2] mt-2">Bio</p>
                        <p className="text-justify">As a student student with a keen interest in new technologies, I am passionate about exploring and staying up-to-date with the latest advancements in tech.</p>
                        <div>
                            <p className="text-[#4267B2] mt-2">Skills</p>
                            <p>C, C++, JavaScript, Python</p>
                            <p className="text-[#4267B2] mt-2">Frame Works</p>
                            <p>React, NextJs, Electron</p>
                        </div>
                        <div>
                            <p className="text-[#4267B2] mt-2">Qulaification</p>
                            <p>Computer Science, JIS University</p>
                            <p>2022-2025</p>
                            <p className="mt-4 text-sm text-gray-500">&#169;The Sweetbook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
