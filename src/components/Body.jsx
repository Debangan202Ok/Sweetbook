import Midarea from "./Midarea"
import RightNavbar from "./RightNavbar"
import Sidebar from "./Sidebar"
import PropTypes from 'prop-types'
import banner from "../../public/images/banner.png"

const Body = ({top}) => {
  return (
    <div className="flex flex-col w-full  h-[80vh] md:[65vh] overflow-scroll overflow-x-hidden  border-8 border-t-0 border-b-0 border-[#898F9C] bg-white m-auto">
      <div ref={top} id="banner" className="flex w-full h-fit justify-center bg-[#12306d]">
        <img src={banner} alt="" />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-baseline md:justify-between">
        <Sidebar />
        <Midarea />
        <RightNavbar />
      </div>
    </div>
  )
}

Body.propTypes = {
  top: PropTypes.object,
}

export default Body
