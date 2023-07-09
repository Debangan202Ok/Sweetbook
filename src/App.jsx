import Body from "./components/Body"
import Titlebar from "./components/Titlebar"
import { useRef } from "react";

const App = () => {
  const ref = useRef(null);

  const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
    <Titlebar home={scrollToTop}/>
    <Body top={ref} />
    </>
  )
}

export default App
