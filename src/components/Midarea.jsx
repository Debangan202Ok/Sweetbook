import PBoxImg from "./PBoxImg"
import Rular from "./pagecomps/Rular"
import Postbox from "./pagecomps/postbox"
import data from "../data/postdata.json"
import myimg from '../../public/images/mypic.jpeg'
import p1 from "../../public/images/oldpape.png"
import p2 from "../../public/images/datastruc.png"
import p3 from "../../public/images/guessnum.png"
import p4 from "../../public/images/textanalyize.png"
import logo from "../../public/images/facelogo.png"


const Midarea = () => {
    return (
        <div>
            <div className="w-[90vw] md:w-[55vw] bg-white flex flex-col my-4 cursor-default">
                <div className="flex justify-between pt-4 ">
                    <p className="font-bold">News Feed</p>
                    <p>Top News | <span className="text-[#4267B2]">Most Recent</span> </p>
                </div>
                {/* postbox */}
                <Postbox />
                {/* post2 */}
                <PBoxImg type={"Text"} user={"Admin"} userpic={logo} title={"Why this?"} subtitile={"I love to explore old era"} date={"Few times ago"} />
                {/* postbox2 */}
                {/* rular */}
                <Rular />
                <PBoxImg type={"Photo"} urls={"https://idyllic-torte-18815e.netlify.app/"} userpic={myimg} user={data.postImg.user} title={data.postImg.postTitle} subtitile={data.postImg.postTitle2} imgs={p1} date={data.postImg.postDate} />
                <Rular />
                <PBoxImg type={"Photo"} urls={"https://data-structure-skill.netlify.app/"} userpic={myimg} user={data.postImg2.user} title={data.postImg2.postTitle} subtitile={data.postImg2.postTitle2} imgs={p2} date={data.postImg2.postDate} />
                <Rular />
                <PBoxImg user={"Admin"} type={"Text"} userpic={logo} title={"Why this?"} subtitile={"I love to explore old era"} date={"Few times ago"} />
                <Rular />
                <PBoxImg type={"Photo"} urls={"https://pauldebangan1970.github.io/GuessTheNum/"} userpic={myimg} user={data.postImg3.user} title={data.postImg3.postTitle} subtitile={data.postImg3.postTitle2} imgs={p3} date={data.postImg3.postDate} />
                <Rular />
                <PBoxImg type={"Photo"} urls={"https://pauldebangan1970.github.io/text-analyzar/"} userpic={myimg} user={data.postImg4.user} title={data.postImg4.postTitle} subtitile={data.postImg4.postTitle2} imgs={p4} date={data.postImg4.postDate} />
            </div>
        </div>
    )
}

export default Midarea
