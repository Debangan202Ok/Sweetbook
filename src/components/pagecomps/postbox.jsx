
const Postbox = () => {
    const openContact = () => {
        window.open("https://www.linkedin.com/in/debangan-paul-chowdhury")
    }
    return (
        <>
            <div className="flex flex-col items-center mt-4 justify-center w-full border-2 p-2 border-dashed bg-[#D3D3D3] border-slate-700 ">
                <div className="w-[90%] border-2 p-4  border-slate-300 bg-white ">
                    <p className="font-bold">Hi, I{`'`}M DEBANGAN</p>
                    <p>A passionate web developer from india</p>
                </div>
                <div className="w-[90%] flex items-center justify-between">
                    <div className="flex text-[0.8rem]">
                        <p>ViewPhotos</p>
                        <p className="mx-2">Share</p>
                    </div>
                    <p className="bg-[#4267B2] text-white w-fit px-4 my-2 cursor-pointer" onClick={openContact}>Contact me</p>
                </div>
            </div>
        </>
    )
}

export default Postbox
